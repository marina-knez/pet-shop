import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({
    categories: []
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategoriesData = async () => {
            const categoriesData = await fetch('http://localhost:4000/dogs')
            .then(res => res.json())
            .then(data => setCategories(data))
        }
        getCategoriesData()
    }, []);

    const value = {categories};

    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}