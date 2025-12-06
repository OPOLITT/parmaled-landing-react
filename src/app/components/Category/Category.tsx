import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Container } from "../../ui/Container/Container";
import { Typography } from "../../ui/Typography/Typography";
import { Button } from "../../ui/Button/Button";
import cls from "./Category.module.scss";
import { Product } from "./Product/Product";
import { CategoryData } from "../../types/category";

export interface CategoryProps {
  data: CategoryData;
}

const ROWS_COUNT = 2;

// Количество колонок в зависимости от размера экрана:
// > 1200px: 4 колонки
// <= 1200px: 3 колонки
// <= 768px: 2 колонки
const getColumnsCount = (width: number): number => {
  if (width <= 768) return 2;
  if (width <= 1200) return 3;
  return 4;
};

const getInitialBlocksCount = (): number => {
  if (typeof window === "undefined") return 8;
  const columnsCount = getColumnsCount(window.innerWidth);
  return columnsCount * ROWS_COUNT;
};

export const Category: React.FC<CategoryProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [initialBlocksCount, setInitialBlocksCount] = useState(
    getInitialBlocksCount
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const hasMoreBlocks = data.blocks.length > initialBlocksCount;

  useEffect(() => {
    const handleResize = () => {
      setInitialBlocksCount(getInitialBlocksCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedBlocks =
    isExpanded && !isClosing
      ? data.blocks
      : data.blocks.slice(0, initialBlocksCount);

  const handleToggle = () => {
    if (isExpanded) {
      setIsClosing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id={data.id} ref={containerRef}>
      <Container>
        <Typography className={cls.subtitle} size={18} weight="medium">
          светодиодный
        </Typography>
        <Typography className={cls.title} size={48} weight="extraBold">
          {data.title}
        </Typography>

        <div className={cls.blocks}>
          {(isExpanded || isClosing ? data.blocks : displayedBlocks).map(
            (block, index) => {
              const isNewBlock = index >= initialBlocksCount;
              const shouldAnimateOut = isClosing && isNewBlock;
              const shouldAnimateIn = isExpanded && !isClosing && isNewBlock;

              return (
                <div
                  key={block.article || index}
                  className={clsx(cls.blockWrapper, {
                    [cls.newBlock]: shouldAnimateIn,
                    [cls.closingBlock]: shouldAnimateOut,
                  })}
                  style={
                    shouldAnimateIn
                      ? ({
                          "--index": index - initialBlocksCount,
                        } as React.CSSProperties)
                      : shouldAnimateOut
                      ? ({
                          "--index": data.blocks.length - 1 - index,
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  <Product article={block.article} image={block.image} />
                </div>
              );
            }
          )}
        </div>

        {hasMoreBlocks && (
          <div className={cls.buttonWrapper}>
            <Button
              className={cls.toggleButton}
              variant="outline"
              onClick={handleToggle}
            >
              {isExpanded ? "Закрыть" : "Загрузить еще"}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
