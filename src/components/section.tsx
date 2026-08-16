import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section">

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-20 border-border border-b py-16 last:border-b-0 sm:scroll-mt-24 sm:py-24", className)}
      {...props}
    />
  )
}
