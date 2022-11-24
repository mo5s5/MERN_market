import React from 'react';
import Category from '../category/Category';
import './main.scss';

export default function Main(props) {
    // const { categories,onAdd } = props;
    const { categories, onChooseCategory } = props;

    return (
        <div className='main'>
            {categories.map((category) => (
                // <Category key={category.id} category={category} onAdd={onAdd}></Category>
                <Category
                    key={category.id}
                    category={category}
                    onChooseCategory={onChooseCategory}
                />
            ))}
        </div>
    )
}