import { Typography } from "../../ui/Typography/Typography";
import { LogotypeHorizontal } from "../Logotype/LogotypeHorizontal";

import cls from "./AboutCompany.module.scss";
import { Container } from "../../ui/Container/Container";

const DESCRIPTION_TEXT =
  "Опираясь на многолетний опыт и экспертизу собственной инженерной команды, компания П-КОМ создает решения, соответствующие высочайшим стандартам отрасли.";

const LEFT_COLUMN_TEXT = [
  "Мы внедряем передовые технологии, которые обеспечивают стабильную работу светильников в самых разных условиях эксплуатации — от полярных холодов до знойного юга.",
  "Светотехника нашего бренда «Парма-ЛЕД» проходит полный цикл контроля качества: от конструкторской проработки и испытаний прототипов до серийного выпуска и финальных тестов готовых изделий.",
  "Такой подход гарантирует надежность, длительный срок службы и безопасную эксплуатацию.",
];

const RIGHT_COLUMN_TEXT = [
  "Мы разрабатываем не просто светильники, а комплексные системы освещения, которые помогают снижать энергопотребление и повышать уровень комфорта и безопасности на объектах железнодорожной инфраструктуры.",
  "«Парма-ЛЕД» — это синергия инженерной точности, технологических инноваций и ответственного отношения к каждому проекту.",
];

export const AboutCompany = () => {
  return (
    <Container className={cls.container}>
      <LogotypeHorizontal className={cls.logotype} width={206} height={40} />
      <Typography className={cls.title} size={48} weight="extraBold">
        О компании
      </Typography>

      <Typography className={cls.description} size={20} weight="medium">
        {DESCRIPTION_TEXT}
      </Typography>

      <div className={cls.content}>
        <div className={cls.column}>
          {LEFT_COLUMN_TEXT.map((text, index) => (
            <Typography
              key={index}
              className={cls.paragraph}
              size={18}
              weight="light"
            >
              {text}
            </Typography>
          ))}
        </div>
        <div className={cls.column}>
          {RIGHT_COLUMN_TEXT.map((text, index) => (
            <Typography
              key={index}
              className={cls.paragraph}
              size={18}
              weight="light"
            >
              {text}
            </Typography>
          ))}
        </div>
      </div>
    </Container>
  );
};
