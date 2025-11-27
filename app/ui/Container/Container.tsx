import cls from "./Container.module.scss";
import clsx from "clsx";

export interface ContainerProps extends React.PropsWithChildren {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={clsx(cls.container, className)}>{children}</div>;
};
