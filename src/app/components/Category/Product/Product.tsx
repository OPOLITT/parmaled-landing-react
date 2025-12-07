import { memo } from "react";
import { Typography } from "../../../ui/Typography/Typography";
import cls from "./Product.module.scss";

export interface ProductProps {
  article: string;
  image: string;
}

export const Product: React.FC<ProductProps> = memo(({
  article,
  image,
}) => {
  return (
    <div className={cls.container}>
      <Typography className={cls.article} size={20} weight="medium">
        {article}
      </Typography>
      
      <div 
        className={cls.image} 
        style={{ 
          backgroundImage: `url(${image})`,
        }} 
      />

      {/* <Button className={cls.button} size="small" variant="primary">
        Подробнее
      </Button> */}
    </div>
  );
});

Product.displayName = "Product";

