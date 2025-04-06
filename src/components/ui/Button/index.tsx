import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonIconPosition = "start" | "end";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: ButtonIconPosition;
  className?: string;
  children: ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-[16px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "start",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    let variantClass = "";

    if (variant === "primary") {
      variantClass = `
        bg-[var(--color-primary-500)]
        text-white
        hover:bg-[var(--color-primary-600)]
        focus:ring-[var(--color-primary-600)]
      `;
    } else if (variant === "secondary") {
      variantClass = `
        bg-[var(--color-primary-100)]
        text-[var(--color-primary-900)]
        hover:bg-[var(--color-primary-600)/0.1]
        focus:ring-[var(--color-primary-600)]
      `;
    } else if (variant === "outline") {
      variantClass = `
        text-[var(--color-primary-600)]
        hover:bg-[var(--color-primary-100)]
        focus:ring-[var(--color-primary-600)]
      `;
    }

    const sizeClass = sizeClasses[size];

    return (
      <button
        ref={ref}
        {...props}
        className={`cursor-pointer inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClass} ${sizeClass} ${className}`}
      >
        {Icon && iconPosition === "start" && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === "end" && <Icon className="w-4 h-4" />}
      </button>
    );
  }
);

Button.displayName = "Button";
