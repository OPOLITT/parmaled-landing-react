import { CategoryData, ProductBlock } from "../types/catalog";
import { catalogData } from "../data/catalog";

/**
 * Получить все категории каталога
 */
export function getAllCategories(): CategoryData[] {
  return catalogData;
}

/**
 * Получить категорию по индексу
 */
export function getCategoryByIndex(index: number): CategoryData | undefined {
  return catalogData[index];
}

/**
 * Получить первую категорию
 */
export function getFirstCategory(): CategoryData | undefined {
  return catalogData[0];
}

/**
 * Получить все блоки продуктов из категории
 */
export function getCategoryBlocks(categoryTitle: string): ProductBlock[] {
  const category = catalogData.find((cat) => cat.title === categoryTitle);
  return category?.blocks || [];
}

