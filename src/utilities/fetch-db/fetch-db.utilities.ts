import { Category } from "../../store/categories/category.types";

export const getCategories = async (): Promise<Category[]> => {
    const categoriesArray = await fetch('http://localhost:4000/dogs')
    .then(res => res.json());

    return categoriesArray;
}