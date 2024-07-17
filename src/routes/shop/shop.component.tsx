import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import ProductDetails from '../../components/product-details/product-details.component';


const Shop = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
            <Route path='/:category/:id' element={<ProductDetails />} />
        </Routes>
    )
}

export default Shop;
