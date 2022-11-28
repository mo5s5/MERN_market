import React from 'react'
import cartIcon from '../../../img/cartIcon.png';
import './basket.scss'
import { Link } from 'react-router-dom'


export default function Basket(props) {
    const { cartItems } = props;
    return (
        <div className='container'>
            <Link to="/basket">
                <img
                    className={(cartItems.length > 0) ? 'full' : 'empty'}
                    src={cartIcon}
                    alt='cart'
                ></img>
            </Link>
            <span>{cartItems.length}</span>
        </div>
    )
}
