"use client";

import cls from "./WelcomeBlock.module.scss";
import { LogotypeHorizontal } from "../Logotype/LogotypeHorizontal";
import { Typography } from "../../ui/Typography/Typography";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/Container/Container";

const TITLE_TEXT = "светодиодное\nосвещение";
const SUBTITLE_TEXT =
  "Инновации, исследования, разработки\nИндивидуализация & фокус на светодиодном ландшафтном освещении";

const CATALOG_PATH = "/parmaled.pdf";

export const WelcomeBlock = () => {
  const handleDownloadCatalog = async () => {
    try {
      const response = await fetch(CATALOG_PATH);
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
      window.open(CATALOG_PATH, "_blank");
    }
  };

  return (
    <div className={cls.wrapper}>
      <Container className={cls.container}>
      <div className={cls.content}>
        <LogotypeHorizontal className={cls.logotype} width={206} height={40} />

        <Typography className={cls.title} size={48} weight="extraBold">
          {TITLE_TEXT}
        </Typography>

        <Typography
          className={cls.description}
          font="secondary"
          size={24}
          weight="regular"
        >
          {SUBTITLE_TEXT}
        </Typography>

        <Button 
          className={cls.button} 
          variant="primary"
          onClick={handleDownloadCatalog}
        >
          Скачать онлайн каталог
        </Button>
      </div>
      </Container>
    </div>
  );
};
