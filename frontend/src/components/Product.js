import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./static/css/Product.css";
import "./Ratings";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    // <Card className="card-contaniner my-3 p-3 rounded ">
    //   <Link to={`/product/${product.product_id}`}>
    //     <Card.Img
    //       className="card-img"
    //       src={product.image}
    //       alt={product.title}

    //     />
    //   </Link>
    //   <Card.Body>
    // <Link to={`/product/${product.product_id}`}>
    //   <Card.Title as="div">
    //     <strong>{product.title}</strong>
    //   </Card.Title>
    // </Link>

    //     <Card.Text as="div">
    //       <div className="my-3">{product.description}</div>
    //     </Card.Text>
    //     <Card.Text as="h3">$: {product.price}</Card.Text>
    //     <Card.Subtitle className="text-warning">
    //       <Ratings value={product.rating} text={product.numReviews} />
    //     </Card.Subtitle>
    //   </Card.Body>
    // </Card>
    <MDBContainer fluid className="card-contaniner my-3 p-3">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={product.image}
                alt={product.title}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <Link to={`/product/${product.product_id}`}>
                <div className="mask"></div>
              </Link>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>
                    <Link
                      to={`/product/${product.product_id}`}
                      className="text-dark"
                    >
                      {product.title}
                    </Link>
                  </h3>
                  <h5 className="text-dark px-1">Price: ${product.price}</h5>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-warning">
                  <Ratings value={product.rating} text={product.numReviews} />
                  </div>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p className="text-dark px-1">Desc: {product.description}</p>
                <p className="small text-dark">Discount: {product.discount}%</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Product;
