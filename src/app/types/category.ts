export interface ProductBlock {
  article: string;
  image: string;
}

export interface CategoryData {
  id: string;
  title: string;
  blocks: ProductBlock[];
}

