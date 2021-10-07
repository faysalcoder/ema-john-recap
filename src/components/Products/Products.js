import React, { createContext, useState } from 'react';
import { Card , Button} from 'react-bootstrap';
export const ProductContext = createContext('product');
const Products = (props) => {
    const [cart, setCart]= useState([])
    const {name,img,catagory,price}= props.product;
    const addCart=(product)=>{
        
        const cartProduct=[...cart, product]
        setCart(cartProduct)
        console.log(cartProduct)
    }
    return (
        <ProductContext.Provider value={props.product}>
  <div>

        <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
        <Card.Title>{catagory}</Card.Title>
        <Card.Text>
        {name} <br />
        {price}
        <br />
        <Button onClick={()=>addCart(props.product)} className="btn-warning text-light fw-bold">Buy Now</Button>
        </Card.Text>
        </Card.Body>
        </Card>
</div>
        </ProductContext.Provider>
      
    );
};

export default Products;