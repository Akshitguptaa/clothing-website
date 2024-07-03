import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/category/category.selector";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap);

    if (!categories || Object.keys(categories).length === 0) {
        return <div>Loading...</div>; 
    }

    return (
        <Fragment>
            {Object.keys(categories).map((title) => {
                const products = categories[title];
                return <CategoryPreview key={title} title={title} products={products} />;
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
