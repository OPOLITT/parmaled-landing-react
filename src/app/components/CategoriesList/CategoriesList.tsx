import { Category } from "../Category/Category";
import { getAllCategories } from "../../lib/category";

export const CategoriesList: React.FC = () => {
  const categories = getAllCategories();

  return (
    <>
      {categories.map((category) => (
        <Category key={category.id} data={category} />
      ))}
    </>
  );
};

