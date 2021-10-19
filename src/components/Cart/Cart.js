import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price , 0)
    let shippingFee = 0 
    for (let i = 0; i < cart.length; i++) {
        const shipping = cart[i].shipping;
        shippingFee = shippingFee + shipping 
    }
    const tax = total / 10
    const grandTotal = Math.floor(total + shippingFee + tax)
    const convertPrice = price => {
        const initialNum = price.toFixed(2)
        return Number(initialNum)
    }

    return (
        <div className='cart-items-wrap'>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p><small>Items Price: ${convertPrice(total)}</small></p>
            <p><small>Shipping Fee: ${convertPrice(shippingFee)}</small></p>
            <p><small>Total before tax: ${convertPrice(shippingFee + total)}</small></p>
            <p><small>Estimated tax: ${convertPrice(tax)}</small></p>
            <h3>Order Total: ${grandTotal}</h3>
            <button className='cart-review-btn'>Review your order</button>
        </div>
    );
};

export default Cart;