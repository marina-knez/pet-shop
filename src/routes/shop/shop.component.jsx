import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/category.action';


const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesData = async () => {
            const categoriesData = await fetch('http://localhost:4000/dogs')
            .then(res => res.json())
            .then(data => dispatch(setCategories(data)))
        }
        getCategoriesData()
    }, [dispatch]);


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;
