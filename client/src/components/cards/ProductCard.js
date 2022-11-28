import React from 'react'
import './productCard.scss'
import cartIcon from '../../img/cartIcon.png';


export default function ProductCard(props) {
    const { product, onAddToCart } = props;
    return (
        <div className='productCard'>
            <img src={product.image} alt={product.name}></img>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>

            <div className='price'>
                <div>
                    {product.price}руб
                </div>
                <div>
                    <img
                        className='cartIcon'
                        onClick={() => onAddToCart(product)}
                        src={cartIcon} alt='cart'
                    ></img>
                </div>
            </div>
        </div>
    )
}
