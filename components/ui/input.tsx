import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 text-base text-[#111111] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#111111] placeholder:text-[#666666] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]/35 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
