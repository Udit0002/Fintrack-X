"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// 1. Add `indicatorClassName` to the list of props you are destructuring.
const Progress = React.forwardRef(
  ({ className, value, extraStyles, indicatorClassName, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
        extraStyles
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        // 2. Apply the `indicatorClassName` here. The `cn` utility will
        // merge it with the default `bg-primary` class, allowing you to
        // override the color dynamically from the parent component.
        className={cn(
          "bg-primary h-full w-full flex-1 transition-all",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };