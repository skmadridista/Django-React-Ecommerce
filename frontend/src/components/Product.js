import React from 'react'
import { Card } from 'react-bootstrap'

function Product({Products}) {
  return (
    
        <Card className='my-3 p-3'>
            <a href={`${Products.id}`}>
                <Card.Img src={Products.image}></Card.Img>
                <h3>{Products.title}</h3>
                <h3>{Products.price}</h3>
            </a>

        </Card>
    
  )
}

export default Product
