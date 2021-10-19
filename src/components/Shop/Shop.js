import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const product10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(product10)
    const [cart, setCart] = useState([])
    const addToCart = (pd) =>{
        console.log('Product Added', pd);
        const newCart = [...cart, pd]
        setCart(newCart);
    }
    
    return (
        <div className='container'>
            <div className="product-container">
                {products.map(product => <Product addToCart={addToCart} product={product}></Product>)}
            </div>
            <div className="product-sidebar">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;