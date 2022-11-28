import React from 'react'
import './categoryCard.scss'

export default function categoryCard(props) {

    const { category, onChooseCategory } = props
    return (
        <div className='card' onClick={() => onChooseCategory(category)}>
            <img src={category.image} alt={category.name} ></img>
            <h3>{category.name}</h3>
        </div>
    )
}
