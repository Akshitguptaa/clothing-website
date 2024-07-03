import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/category/category.selector';

import { CategoryPage, Container, Title } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <CategoryPage>
            <Title>{category.toUpperCase()}</Title>
            <Container>

                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </Container>
        </CategoryPage>
    )
};

export default Category;