import React, { useContext } from 'react';
import { ProductContext } from '../Products/Products';

const Cart = () => {
    const product = useContext(ProductContext)
    console.log(product)
    return (
        
        <div>
           
        </div>
    );
};

export default Cart;