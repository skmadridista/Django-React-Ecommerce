import { useState,useEffect } from "react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product";

function HomeScreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price,image")
    .then((res) => res.json())
    .then((data) => {
      setData(data.products);
      console.log(data.products);
    });
  }, [])
  

  return (
    <div>
      <h2 className="text-center">Lates Products</h2>
      <Row>
        {data.map((e, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product Products={e}/> 
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
