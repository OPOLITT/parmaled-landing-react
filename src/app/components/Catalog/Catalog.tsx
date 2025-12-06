import { useState, useEffect } from "react";
import { Container } from "../../ui/Container/Container";
import { Typography } from "../../ui/Typography/Typography";
import cls from "./Catalog.module.scss";
import { CatalogBlock } from "./CatalogBlock/CatalogBlock";
import { catalog } from "../../data/catalog";
import { scrollToCategory } from "../../lib/scroll";

export const Catalog: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Container>
      <Typography className={cls.title} size={48} weight='extraBold'>Каталог</Typography>

      {isMobile ? (
        <div className={cls.blocks}>
          <div className={cls.row}>
            {catalog.map((category, index) => {
              if (index % 2 === 0) {
                return (
                  <CatalogBlock
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}
                    onViewClick={scrollToCategory}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className={cls.row}>
            {catalog.map((category, index) => {
              if (index % 2 === 1) {
                return (
                  <CatalogBlock
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}
                    onViewClick={scrollToCategory}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      ) : (
        <div className={cls.blocks}>
          {catalog.map((category) => (
            <CatalogBlock
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
              onViewClick={scrollToCategory}
            />
          ))}
        </div>
      )}
    </Container>
  );
};