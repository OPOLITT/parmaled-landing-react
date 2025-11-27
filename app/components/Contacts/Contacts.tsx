import { Container } from "../../ui/Container/Container";
import { LogotypeVertical } from "../Logotype/LogotypeVertical";
import { Typography } from "../../ui/Typography/Typography";
import cls from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <Container className={cls.container}>
      <LogotypeVertical className={cls.logotype} width={560} height={235} />

      <div className={cls.contacts}>
        <div className={cls.column}>
          <Typography size={16} weight="regular">
            +7(342)203-03-64
          </Typography>
          <Typography size={16} weight="regular">
            +7 (912) 987-77-28
          </Typography>
          <Typography size={16} weight="regular">
            Info@p-com.org
          </Typography>
        </div>

        <div className={cls.column}>
          <Typography size={16} weight="regular">
            оферта
          </Typography>
          <Typography size={16} weight="regular">
            политика конфиденциальности
          </Typography>
        </div>

        <div className={cls.column}>
          <Typography size={16} weight="regular">
            614010, Пермский край, г. Пермь,
          </Typography>
          <Typography size={16} weight="regular">
            ул. Героев Хасана, д. 7а, офис 213
          </Typography>
        </div>
      </div>
    </Container>
  );
};
