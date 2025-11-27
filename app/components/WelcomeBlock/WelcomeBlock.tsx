import Image from "next/image";

import cls from "./WelcomeBlock.module.scss";
import { LogotypeHorizontal } from "../Logotype/LogotypeHorizontal";
import { Typography } from "../../ui/Typography/Typography";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/Container/Container";

const TITLE_TEXT = "светодиодное\nосвещение";
const SUBTITLE_TEXT = "Инновации, исследования, разработки\nИндивидуализация & фокус на светодиодном ландшафтном освещении";

export const WelcomeBlock = () => {
  return (
    <Container className={cls.container}>
      <Image
        className={cls.light}
        src="/WelcomeBlock/light.png"
        alt="Welcome Block Background"
        width={510}
        height={510}
      />

      <LogotypeHorizontal width={206} height={40} />

      <Typography
        className={cls.title}
        size={48}
        weight="extraBold"
      >
        {TITLE_TEXT}
      </Typography>

      <Typography
        className={cls.description}
        font="primary"
        size={20}
        weight="regular"
      >
        {SUBTITLE_TEXT}
      </Typography>

      <Button variant="primary">Cкачать онлайн каталог</Button>
    </Container>
  );
};
