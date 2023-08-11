import { useEffect } from "react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Loader from "../Loader";
function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      
      <h2 className="text-center">Lates Products</h2>
      {loading ? (
        // <Container>
        //   <Row className="justify-content-center">
        //     <Col xs={12} md={8}>
        //       <div
        //         class="tenor-gif-embed"
        //         data-postid="21140992"
        //         data-share-method="host"
        //         data-aspect-ratio="1"
        //         data-width="100%"
        //       >
        //         <a href="https://tenor.com/view/loading-splash-gif-21140992">
        //           Loading Splash GIF
        //         </a>
        //         from
        //         <a href="https://tenor.com/search/loading-gifs">Loading GIFs</a>
        //       </div>
        //       <script
        //         type="text/javascript"
        //         async
        //         src="https://tenor.com/embed.js"
        //       ></script>
        //     </Col>
        //   </Row>
        // </Container>
        <Loader />
      ) : error ? (
       <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((e, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={e} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
