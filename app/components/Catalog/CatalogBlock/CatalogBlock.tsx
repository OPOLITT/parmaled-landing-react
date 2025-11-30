"use client";

import { Typography } from "../../../ui/Typography/Typography";
import cls from "./CatalogBlock.module.scss";
import { Button } from "../../../ui/Button/Button";

export interface CatalogBlockProps {
  id: string; // ID для скролла к секции категории
  title: string;
  image: string;
  onViewClick?: (categoryId: string) => void; // Callback для скролла к категории
}

export const CatalogBlock: React.FC<CatalogBlockProps> = ({ 
  id, 
  title, 
  image,
  onViewClick 
}) => {
  const handleViewClick = () => {
    if (onViewClick) {
      onViewClick(id);
    }
  };

  return (
    <div className={cls.wrapper}>
      <div
        className={cls.container}
        style={{ backgroundImage: `url(${image})` }}
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
};
