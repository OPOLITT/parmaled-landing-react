import clsx from "clsx";
import cls from "./Button.module.scss";

export interface ButtonProps extends React.PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={clsx(cls.button, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
};