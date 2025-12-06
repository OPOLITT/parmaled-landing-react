import { useCallback } from "react";
import cls from "./WelcomeBlock.module.scss";
import { LogotypeHorizontal } from "../Logotype/LogotypeHorizontal";
import { Typography } from "../../ui/Typography/Typography";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/Container/Container";
import { downloadCatalog } from "../../lib/download";

const TITLE_TEXT = "светодиодное\nосвещение";
const SUBTITLE_TEXT =
  "Инновации, исследования, разработки\nИндивидуализация & фокус на светодиодном ландшафтном освещении";

export const WelcomeBlock = () => {
  const handleDownloadCatalog = useCallback(() => {
    downloadCatalog();
  }, []);

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
