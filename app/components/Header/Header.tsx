"use client";

import { useState, useEffect, useRef } from "react";
import { LogotypeHorizontal } from "../Logotype/LogotypeHorizontal";
import { HamburgerButton } from "./HamburgerButton/HamburgerButton";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import cls from "./Header.module.scss";
import clsx from "clsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const hideAfterNavClick = useRef(false);

  const downloadCatalog = async () => {
    try {
      const response = await fetch("/parmaled.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "parmaled.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при скачивании каталога:", error);
      // Fallback: открываем файл в новой вкладке
      window.open("/parmaled.pdf", "_blank");
    }
  };

  const scrollToSection = (sectionId: string, itemId?: string) => {
    // Если это пункт "скачать каталог", скачиваем файл
    if (itemId === "download") {
      downloadCatalog();
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const isDesktop = window.innerWidth > 700;
      
      // Скрываем header при клике на меню (только на desktop)
      if (isDesktop && window.scrollY > 200) {
        hideAfterNavClick.current = true;
        setIsHidden(true);
        lastScrollY.current = window.scrollY;
      }
      
      // Прокрутка с отступом 150px сверху
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 150;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string, itemId?: string) => {
    scrollToSection(sectionId, itemId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isDesktop = window.innerWidth > 700;
      const scrollDifference = lastScrollY.current - currentScrollY;

      if (!isDesktop) {
        setIsHidden(false);
        hideAfterNavClick.current = false;
        return;
      }

      // Всегда показываем header в верхней части страницы
      if (currentScrollY < 200) {
        setIsHidden(false);
        hideAfterNavClick.current = false;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Если header был скрыт после клика на меню, не показываем его автоматически
      if (hideAfterNavClick.current) {
        // Сбрасываем флаг только при значительной прокрутке вверх
        if (currentScrollY < lastScrollY.current && scrollDifference > 100) {
          hideAfterNavClick.current = false;
        } else {
          // Обновляем lastScrollY, но не меняем состояние isHidden
          lastScrollY.current = currentScrollY;
          return;
        }
      }

      // Скрываем header при прокрутке вниз
      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true);
        hideAfterNavClick.current = false;
      } 
      // Показываем header только если прокрутили вверх на значительное расстояние (больше 40px)
      else if (currentScrollY < lastScrollY.current && scrollDifference > 40) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const isDesktop = window.innerWidth > 700;
      if (!isDesktop) return;

      if (e.clientY <= 100) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(cls.header, {
          [cls.open]: isMenuOpen,
          [cls.hidden]: isHidden && !isHovered,
        })}
      >
        <nav className={cls.navigation}>
          <DesktopNavigation onNavClick={scrollToSection} />

          <div className={cls.mobileNav}>
            <LogotypeHorizontal
              width={206}
              height={40}
              className={cls.mobileLogotype}
            />

            <HamburgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </nav>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleMenuToggle}
        onNavClick={handleNavClick}
      />
    </>
  );
};
