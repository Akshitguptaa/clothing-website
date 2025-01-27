import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, CategoryPreviewTitle, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>
            <Preview>
                {
                    products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;