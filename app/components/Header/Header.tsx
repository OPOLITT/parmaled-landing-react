"use client";

import { LogotypeVertical } from "../Logotype/LogotypeVertical";
import cls from "./Header.module.scss";
import { Typography } from "../../ui/Typography/Typography";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  return (
    <header className={cls.header}>
      <nav className={cls.navigation}>
        <button
          className={cls.navigationButton}
          onClick={() => scrollToSection("catalog")}
        >
          <Typography size={18} weight="regular">Каталог</Typography>
        </button>
        <button
          className={cls.navigationButton}
          onClick={() => scrollToSection("about")}
        >
          <Typography size={18} weight="regular">О компании</Typography>
        </button>

        <LogotypeVertical
          width={136}
          height={57}
          className={cls.logotype}
        />

        <button
          className={cls.navigationButton}
          onClick={() => scrollToSection("contacts")}
        >
          <Typography size={18} weight="regular">Контакты</Typography>
        </button>
        <button
          className={cls.navigationButton}
          onClick={() => scrollToSection("catalog")}
        >
          <Typography size={18} weight="regular">Скачать каталог</Typography>
        </button>
      </nav>
    </header>
  );
};