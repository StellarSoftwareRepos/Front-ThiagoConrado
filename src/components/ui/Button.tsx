import { ReactNode } from "react";
import { FiMail, FiUser } from "react-icons/fi";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: "mail" | "user";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  href,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1";

  const variants = {
    primary:
      "border-2 border-transparent text-primary bg-white hover:bg-white/90",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-primary",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const iconComponent = {
    mail: <FiMail className="mr-2" />,
    user: <FiUser className="mr-2" />,
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && iconComponent[icon]}
      {children}
    </Component>
  );
}
