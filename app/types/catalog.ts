export interface ProductBlock {
  article: string; // Артикул продукта
  image: string; // Путь к фотографии
}

export interface CategoryData {
  id: string; // ID для связи с каталогом и скролла к секции
  title: string; // Основной заголовок категории
  blocks: ProductBlock[]; // Массив блоков с продуктами
}

