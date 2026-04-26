import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "font-sans", // default font family
  {
    variants: {
      variant: {
        display: "text-[28px] leading-[38px] font-bold", // Special Heading Display 4
        h1: "text-4xl leading-tight font-bold lg:text-5xl", // Page-level h1 fallback
        h2: "text-3xl leading-tight font-bold lg:text-4xl", // Section heading
        h3: "text-2xl leading-snug font-bold lg:text-3xl", // Sub-section heading
        h4: "text-xl leading-snug font-bold lg:text-2xl", // Card title / smaller heading
        p: "text-[18px] leading-[30px] font-normal", // Body Default
        span: "text-[18px] leading-[30px] font-normal", // Inline Body Default
      },
      color: {
        default: "text-typography-body",
        heading: "text-typography-heading",
        inverse: "text-typography-inverse",
        primary: "text-primary-green",
        muted: "text-muted-foreground",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "p",
      color: "default",
      align: "left",
    },
  }
)

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, align, as, ...props }, ref) => {
    const Comp = as || (variant === "display" ? "h1" : variant === "p" || variant === "span" ? variant : "h2")

    return (
      <Comp
        className={cn(typographyVariants({ variant, color, align, className }))}
        {...props}
        ref={ref as any}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
