import React from 'react';
import { cn } from "@/lib/utils";

// Remove the BorderBeamProps interface and use HTMLDivElement attributes directly
export const BorderBeam = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg border border-neutral-200 dark:border-neutral-800",
          "before:absolute before:inset-0 before:rounded-[inherit] before:border-t-0 before:border-l-0 before:border-solid before:border-transparent",
          "after:absolute after:inset-0 after:rounded-[inherit] after:border-b-0 after:border-r-0 after:border-solid after:border-transparent",
          "before:animate-border-beam-spin after:animate-border-beam-spin",
          className
        )}
        {...props}
      />
    );
  }
);

BorderBeam.displayName = "BorderBeam";
