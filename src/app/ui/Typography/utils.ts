import { TypographySize } from "./Typography";

/**
 * Маппинг размера шрифта на соответствующий HTML тег
 */
const sizeToTagMap: Record<TypographySize, React.ElementType> = {
  64: "h1",
  48: "h1",
  28: "h2",
  24: "h2",
  22: "h3",
  20: "p",
  18: "p",
  16: "p",
  14: "p",
  12: "span",
  10: "span",
};

/**
 * Определяет HTML тег на основе размера шрифта
 * @param size - Размер шрифта
 * @returns HTML тег для рендеринга
 */
export const getTagBySize = (size: TypographySize): React.ElementType => {
  return sizeToTagMap[size];
};

