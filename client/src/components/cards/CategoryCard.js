import React from 'react'
import './categoryCard.scss'

export default function categoryCard (props) {
    // const {product, onAdd } =props

    const {category, onChooseCategory} =props
    return (
        <div className='card' onClick={()=>onChooseCategory(category)}>
            {/* <img onClick={() => onAdd(product)} src={product.image} alt={product.name}></img> */}
            <img src={category.image} alt={category.name} ></img>

            <h3>{category.name}</h3>
        </div>
    )
}
