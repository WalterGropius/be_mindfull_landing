#!/usr/bin/env bash
#
# process-trailers.sh
# ---------------------------------------------------------------------------
# Turns the two Google Drive folders into web-optimized assets for the site.
#
# USAGE
#   1. Download both Drive folders as .zip files into the repo root:
#        - "Trailery. Videa"            (the 6 trailer .mp4 files)
#        - "1_Covers na weby_trailery"  (the 6 cover .jpg files)
#   2. From the repo root, run:
#        bash scripts/process-trailers.sh
#
# REQUIREMENTS
#   - ffmpeg   ->  brew install ffmpeg
#   - unzip    (preinstalled on macOS)
#   - sips     (preinstalled on macOS; used for the cover images)
#
# OUTPUT  ->  public/trailers/
#   home-page.mp4  4denni-kurz.mp4  foundations.mp4
#   8tydenni-kurz.mp4  membership.mp4  firmy.mp4
#   cover-4denni-kurz.jpg  cover-foundations.jpg  cover-8tydenni-kurz.jpg
#   cover-membership.jpg   cover-firmy.jpg
# (The home-page cover is intentionally skipped — the site keeps the photo
#  that is already on the homepage.)
# ---------------------------------------------------------------------------

set -euo pipefail

# --- tuning ---------------------------------------------------------------
# CRF: lower = better quality + bigger file. 25 is a good web default.
#      Try 22 for higher quality, 28 for smaller files.
CRF=25
# Max video width. The player is never wider than ~1024px on the site,
# so 1280 (720p) is plenty sharp. Raise to 1920 for 1080p if you prefer.
MAX_VIDEO_WIDTH=1280
# --------------------------------------------------------------------------

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

OUT_DIR="public/trailers"
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

command -v ffmpeg >/dev/null 2>&1 || { echo "ERROR: ffmpeg not found. Install it with:  brew install ffmpeg"; exit 1; }
command -v unzip  >/dev/null 2>&1 || { echo "ERROR: unzip not found."; exit 1; }

mkdir -p "$OUT_DIR"

# --- 1. extract the downloaded zip archives -------------------------------
shopt -s nullglob
ZIPS=( *.zip )
if [ ${#ZIPS[@]} -eq 0 ]; then
  echo "ERROR: no .zip files found in the repo root ($REPO_ROOT)."
  echo "       Download both Drive folders as zips here first, then re-run."
  exit 1
fi

echo "==> Extracting:"
for z in "${ZIPS[@]}"; do
  echo "    - $z"
  unzip -o -q "$z" -d "$WORK_DIR"
done

# --- 2. compress the trailer videos ---------------------------------------
compress_video () {
  local src="$1" out="$OUT_DIR/$2"
  echo "==> Encoding $2  (from: $(basename "$src"))"
  ffmpeg -nostdin -y -loglevel error -stats -i "$src" \
    -vf "scale='min($MAX_VIDEO_WIDTH,iw)':-2" \
    -c:v libx264 -profile:v high -pix_fmt yuv420p -preset slow -crf "$CRF" \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$out"
  echo "    -> $out  ($(du -h "$out" | cut -f1))"
}

echo "==> Compressing trailer videos..."
while IFS= read -r -d '' f; do
  base="$(basename "$f")"
  case "$base" in
    *"TRAILER 1"*|*"TRAILER1"*|*Home*)        compress_video "$f" "home-page.mp4" ;;
    *"TRAILER 2"*|*"TRAILER2"*)               compress_video "$f" "4denni-kurz.mp4" ;;
    *"TRAILER 3"*|*"TRAILER3"*|*Foundations*) compress_video "$f" "foundations.mp4" ;;
    *"TRAILER 4"*|*"TRAILER4"*)               compress_video "$f" "8tydenni-kurz.mp4" ;;
    *"TRAILER 5"*|*"TRAILER5"*|*Membership*)  compress_video "$f" "membership.mp4" ;;
    *"TRAILER 6"*|*"TRAILER6"*|*Firem*)       compress_video "$f" "firmy.mp4" ;;
    *) echo "    ?? Skipped unrecognized video: $base" ;;
  esac
done < <(find "$WORK_DIR" -type f -iname '*.mp4' -not -name '._*' -not -path '*__MACOSX*' -print0)

# --- 3. optimize the cover images -----------------------------------------
optimize_cover () {
  local src="$1" out="$OUT_DIR/$2"
  echo "==> Optimizing $2  (from: $(basename "$src"))"
  if command -v sips >/dev/null 2>&1; then
    cp "$src" "$WORK_DIR/_cover_tmp.jpg"
    sips -Z 2000 -s format jpeg -s formatOptions 82 "$WORK_DIR/_cover_tmp.jpg" --out "$out" >/dev/null
    rm -f "$WORK_DIR/_cover_tmp.jpg"
  else
    ffmpeg -nostdin -y -loglevel error -i "$src" -vf "scale='min(2000,iw)':-2" -q:v 3 "$out"
  fi
  echo "    -> $out  ($(du -h "$out" | cut -f1))"
}

echo "==> Optimizing cover images..."
while IFS= read -r -d '' f; do
  base="$(basename "$f")"
  case "$base" in
    *Home*)         echo "    -- Home page cover skipped (site keeps the existing homepage photo)" ;;
    *Foundations*)  optimize_cover "$f" "cover-foundations.jpg" ;;
    *Membership*)   optimize_cover "$f" "cover-membership.jpg" ;;
    *Firem*)        optimize_cover "$f" "cover-firmy.jpg" ;;
    4*)             optimize_cover "$f" "cover-4denni-kurz.jpg" ;;
    8*)             optimize_cover "$f" "cover-8tydenni-kurz.jpg" ;;
    *) echo "    ?? Skipped unrecognized image: $base" ;;
  esac
done < <(find "$WORK_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -not -name '._*' -not -path '*__MACOSX*' -print0)

# --- 4. verify ------------------------------------------------------------
echo
echo "==> Result in $OUT_DIR:"
ls -lh "$OUT_DIR"

MISSING=0
for v in home-page.mp4 4denni-kurz.mp4 foundations.mp4 8tydenni-kurz.mp4 membership.mp4 firmy.mp4; do
  [ -f "$OUT_DIR/$v" ] || { echo "    WARNING: missing $OUT_DIR/$v"; MISSING=1; }
done

echo
if [ "$MISSING" -eq 0 ]; then
  echo "All 6 trailers produced. Next:"
else
  echo "Some trailers are missing — check the zip contents and re-run. Next:"
fi
echo "    git add public/trailers && git commit -m 'Add compressed trailer videos' && git push"
echo "(The .zip files are git-ignored; you can delete them once you're done.)"
