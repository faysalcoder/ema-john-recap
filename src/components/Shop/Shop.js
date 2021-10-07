import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts]= useProducts();
    return (
        <div>
<Container>
    <Cart></Cart>
<Row className="g-4">
   
{
                products.map(product=>  <Col key={product.key} md={4} xs={6}><Products  product={product}></Products></Col>)
            }
  </Row>
  </Container>
           
        </div>
    );
};

export default Shop;