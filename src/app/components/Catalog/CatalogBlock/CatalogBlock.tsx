import { memo, useCallback } from "react";
import { Typography } from "../../../ui/Typography/Typography";
import { useLazyImage } from "../../../lib/hooks/useLazyImage";
import cls from "./CatalogBlock.module.scss";
import { Button } from "../../../ui/Button/Button";

export interface CatalogBlockProps {
  id: string; // ID для скролла к секции категории
  title: string;
  image: string;
  onViewClick?: (categoryId: string) => void; // Callback для скролла к категории
}

export const CatalogBlock: React.FC<CatalogBlockProps> = memo(({ 
  id, 
  title, 
  image,
  onViewClick 
}) => {
  const { imageSrc, imgRef } = useLazyImage(image);
  const handleViewClick = useCallback(() => {
    onViewClick?.(id);
  }, [id, onViewClick]);

  return (
    <div className={cls.wrapper}>
      <div
        ref={imgRef}
        className={cls.container}
        style={{ 
          backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
          backgroundColor: imageSrc ? undefined : "#f0f0f0"
        }}
      >
        <Typography className={cls.title} size={12} weight="regular">
          {title}
        </Typography>
      </div>
      <Button
        className={cls.button}
        variant="primary"
        onClick={handleViewClick}
      >
        смотреть
      </Button>
    </div>
  );
});

CatalogBlock.displayName = "CatalogBlock";
