import { memo } from "react";
import { Typography } from "../../../ui/Typography/Typography";
import { useLazyImage } from "../../../lib/hooks/useLazyImage";
import cls from "./Product.module.scss";

export interface ProductProps {
  article: string;
  image: string;
}

export const Product: React.FC<ProductProps> = memo(({
  article,
  image,
}) => {
  const { imageSrc, imgRef } = useLazyImage(image);

  return (
    <div className={cls.container}>
      <Typography className={cls.article} size={20} weight="medium">
        {article}
      </Typography>
      
      <div 
        ref={imgRef}
        className={cls.image} 
        style={{ 
          backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
          backgroundColor: imageSrc ? undefined : "#f0f0f0"
        }} 
      />

      {/* <Button className={cls.button} size="small" variant="primary">
        Подробнее
      </Button> */}
    </div>
  );
});

Product.displayName = "Product";

