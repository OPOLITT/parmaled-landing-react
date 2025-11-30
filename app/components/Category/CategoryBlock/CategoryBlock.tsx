import { Button } from "../../../ui/Button/Button";
import { Typography } from "../../../ui/Typography/Typography";
import cls from "./CategoryBlock.module.scss";

export interface CategoryBlockProps {
  article: string;
  image: string;
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  article,
  image,
}) => {
  return (
    <div className={cls.container} style={{ backgroundImage: `url(${image})` }}>
      <Typography className={cls.article} size={20} weight="medium">
        {article}
      </Typography>

      {/* <Button className={cls.button} size="small" variant="primary">
        Подробнее
      </Button> */}
    </div>
  );
};
