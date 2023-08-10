import { useState,useEffect } from "react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product";
import axios from 'axios'

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchAllProducts(){

      await axios.get('api/products').then(data=>setProducts(data.data))
      console.log(products);
    }
    fetchAllProducts()
  },[])
  

  return (
    <div>
      <h2 className="text-center">Lates Products</h2>
      <Row>
        {products.map((e, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={e}/> 
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
