import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Net Fortress custom variants
        netfortress: "border-transparent bg-netfortress-500 text-white hover:bg-netfortress-600",
        "netfortress-outline":
          "border-netfortress-500 text-netfortress-500 hover:bg-netfortress-50 dark:hover:bg-netfortress-950/20",
        "netfortress-subtle":
          "border-transparent bg-netfortress-100 text-netfortress-800 hover:bg-netfortress-200 dark:bg-netfortress-900/30 dark:text-netfortress-300 dark:hover:bg-netfortress-900/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

