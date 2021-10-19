import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product
    return (
        <div className='single-product'>
            <div className="p-img">
                <img src={img} alt="" />
            </div>
            <div className="p-details">
                <h2 className='p-name'>{name}</h2>
                <p>by: {seller}</p>
                <ul>
                    <li>${price}</li>
                    <li>{star}</li>
                    <li><small>only {stock} left in stock - order soon</small></li>
                    <li><b>Features</b></li>
                </ul>
                <button className='cart-btn' onClick={() => props.addToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;