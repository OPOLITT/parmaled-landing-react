export interface ProductBlock {
  article: string; // Артикул продукта
  image: string; // Путь к фотографии
}

export interface CategoryData {
  title: string; // Основной заголовок категории
  blocks: ProductBlock[]; // Массив блоков с продуктами
}

