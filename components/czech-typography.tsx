"use client"

import { useEffect } from "react"

// Česká typografie: jednopísmenné předložky a spojky (k, s, v, z, o, u, a, i)
// nesmí zůstat samostatně na konci řádku. Mezeru za nimi proto nahrazujeme
// pevnou mezerou (U+00A0), aby se držely s následujícím slovem.
//
// Řeší se globálně nad vykresleným DOMem (texty žijí v desítkách komponent),
// MutationObserver pokrývá i obsah dorenderovaný později.

// Jednopísmenné slovo = znak ohraničený začátkem textu / mezerou / závorkou,
// následovaný mezerou. Pevná mezera v předchozí pozici umožní zřetězení
// ("a v lese" → "a v lese").
const ORPHAN_RE = /(^|[\s („"])([ksvzouaiKSVZOUAI])[ \t]+/g

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "TEXTAREA", "CODE", "PRE", "KBD", "SAMP"])

function fixOrphans(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent || SKIP_TAGS.has(parent.tagName) || parent.isContentEditable) {
        return NodeFilter.FILTER_REJECT
      }
      return NodeFilter.FILTER_ACCEPT
    },
  })

  const textNodes: Text[] = []
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text)

  for (const node of textNodes) {
    const fixed = node.data.replace(ORPHAN_RE, "$1$2\u00A0")
    if (fixed !== node.data) node.data = fixed
  }
}

export function CzechTypography() {
  useEffect(() => {
    fixOrphans(document.body)

    let frame = 0
    const observer = new MutationObserver(() => {
      // Batch through rAF; opravy samotné spustí characterData mutace,
      // ale druhý průběh už nic nemění, takže se smyčka zastaví.
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        fixOrphans(document.body)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
