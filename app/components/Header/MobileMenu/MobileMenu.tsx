"use client";

import { useEffect } from "react";
import { navigationItems } from "../navigationItems";
import cls from "./MobileMenu.module.scss";
import clsx from "clsx";
import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { LogotypeHorizontal } from "../../Logotype/LogotypeHorizontal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (sectionId: string, itemId?: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavClick,
}) => {
  const handleClick = (sectionId: string, itemId?: string) => {
    onNavClick(sectionId, itemId);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={clsx(cls.backdrop, {
          [cls.open]: isOpen,
        })}
        onClick={onClose}
      >
      <div 
        className={cls.overlay}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cls.hamburgerWrapper}>
          <HamburgerButton isOpen={isOpen} onClick={onClose} />
        </div>

        <div className={cls.mobileMenu}>
          <LogotypeHorizontal
            width={174}
            height={34}
            className={cls.mobileLogotype}
          />
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={cls.mobileMenuButton}
              onClick={() => handleClick(item.sectionId, item.id)}
            >
              {item.label}
            </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
