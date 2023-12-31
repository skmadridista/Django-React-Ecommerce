import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Ratings from "../Ratings";
import "../static/css/Product.css";
// import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
// import { productDetailsReducers } from "../../reducers/ProductReducers";
import { listProductDetails } from "../../actions/productActions";
import Message from "../Message";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";

function ProdScreen() {
  const { id } = useParams();
  console.log("Extracted ID:", id);
  // ...

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  return (
    <MDBContainer fluid className="my-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <MDBRow className="justify-content-center">
          <MDBCol  md="4" lg="4" xl="6">
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
                <Link to="#">
                  <div className="mask"></div>
                </Link>
              </MDBRipple>
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>
                      <Link to="#" className="text-dark">
                        {product.title}
                      </Link>
                    </p>
                    <p className="small text-muted">{product.category}</p>
                    <p className="small text-muted">{product.brand}</p>
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                      <Ratings
                        value={product.rating}
                        text={product.numReviews}
                      />
                    </div>
                    <p className="small text-muted">Rated {product.rating}/5</p>
                  </div>
                </div>
              </MDBCardBody>
              <hr class="my-0" />
              <MDBCardBody className="pb-0 ">
                <div className="d-flex justify-content-between">
                  <h5 className="text-dark px-1">Price: ${product.price}</h5>
                  <p className="text-dark px-1">Desc: {product.description}</p>
                </div>
                <h6 className="small text-dark">
                  Discount: {product.discount}%
                </h6>
              </MDBCardBody>
              <hr class="my-0" />
              <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                  <Link to="/" className="text-dark fw-bold">
                    Cancel
                  </Link>
                  <MDBBtn color="primary" disabled={product.stock === 0}>
                    {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

export default ProdScreen;
