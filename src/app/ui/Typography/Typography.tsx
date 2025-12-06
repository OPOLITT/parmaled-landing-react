import clsx from "clsx";
import cls from "./Typography.module.scss";
import { getTagBySize } from "./utils";

export type TypographyFont = "primary" | "secondary";
export type TypographySize = 64 | 48 | 28 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
export type TypographyWeight = "extraBold" | "medium" | "regular" | "light";

export interface TypographyProps extends React.PropsWithChildren {
  /** Шрифт: primary (Unbounded) или secondary (Gothic) */
  font?: TypographyFont;
  size?: TypographySize;
  weight?: TypographyWeight;
  className?: string;
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  font = "primary",
  size = 16,
  weight = "regular",
  className,
  as,
}) => {
  const tag = as || getTagBySize(size);
  const Tag = tag as React.ElementType;

  return (
    <Tag
      data-font={font}
      data-weight={weight}
      data-size={size}
      className={clsx(cls.typography, className)}
    >
      {children}
    </Tag>
  );
};
