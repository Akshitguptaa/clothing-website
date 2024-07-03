import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/category/category.action'; // Corrected import

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            try {
                const categoriesArray = await getCategoriesAndDocuments();
                dispatch(setCategories(categoriesArray));
            } catch (error) {
                console.error("Error setting categories:", error);
            }
        };

        getCategoriesMap(); 
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} /> 
        </Routes>
    );
};

export default Shop;
