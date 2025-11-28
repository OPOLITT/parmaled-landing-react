import { Container } from "../../ui/Container/Container";
import { Typography } from "../../ui/Typography/Typography";
import cls from "./Category.module.scss";
import { CategoryBlock } from "./CategoryBlock/CategoryBlock";
import { CategoryData } from "../../types/catalog";

export interface CategoryProps {
  data: CategoryData;
}

export const Category: React.FC<CategoryProps> = ({ data }) => {
  return (
    <Container>
      <Typography className={cls.subtitle} size={18} weight="medium">
        светодиодный
      </Typography>
      <Typography className={cls.title} size={48} weight="extraBold">
        {data.title}
      </Typography>

      <div className={cls.blocks}>
        {data.blocks.map((block, index) => (
          <CategoryBlock
            key={index}
            article={block.article}
            image={block.image}
          />
        ))}
      </div>
    </Container>
  );
};
