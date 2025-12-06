import cls from "./HamburgerButton.module.scss";

interface HamburgerButtonProps {
  onClick: () => void;
  isOpen?: boolean;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  isOpen = false,
}) => {
  return (
    <button
      className={`${cls.hamburgerButton} ${isOpen ? cls.open : ""}`}
      onClick={onClick}
      aria-label="Меню"
    >
      <span className={cls.hamburgerLine}></span>
      <span className={cls.hamburgerLine}></span>
      <span className={cls.hamburgerLine}></span>
    </button>
  );
};

