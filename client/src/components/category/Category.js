import React from 'react';
import { Link } from 'react-router-dom'
import CategoryCard from '../cards/CategoryCard';

function Category(props) {
    const { category, onChooseCategory } = props;
    return (
        <Link className='category' to={'/products'}>
            <CategoryCard category={category} onChooseCategory={onChooseCategory} />
        </Link>

    );
}

export default Category;