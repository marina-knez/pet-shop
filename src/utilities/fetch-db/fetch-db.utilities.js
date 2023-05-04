export const getCategories = async () => {
    const categoriesArray = await await fetch('http://localhost:4000/dogs')
    .then(res => res.json());

    return categoriesArray;
}