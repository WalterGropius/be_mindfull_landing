import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "font-sans", // default font family
  {
    variants: {
      variant: {
        display: "text-[28px] leading-[38px] font-bold", // Special Heading Display 4
        h1: "text-[32px] leading-[42px] font-bold", // Added as generic h1 fallback if needed
        h2: "text-[28px] leading-[38px] font-bold", // Using Display 4 specs for h2 usually
        h3: "text-[24px] leading-[34px] font-bold", // Heading H3
        h4: "text-[20px] leading-[30px] font-bold", // Fallback for smaller headings
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
