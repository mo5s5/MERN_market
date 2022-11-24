import React from 'react';
import { Link } from 'react-router-dom'
import CategoryCard from '../cards/CategoryCard';

function Category(props) {
    // const { category, onAdd } = props;
    const { category, onChooseCategory} = props;
    return (
        <Link className='category' to={'/products'}>
            {/* <CategoryCard product={category} onAdd={onAdd}/> */}
            <CategoryCard category={category} onChooseCategory={onChooseCategory}/>
            {/* <div className='card'>
                <img onClick={() => onAdd(category)} src={category.image} alt={category.name}></img>
                <h3>{category.name}</h3>
            </div> */}
        </Link>

    );
}

export default Category;