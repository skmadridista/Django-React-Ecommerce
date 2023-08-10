import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";
import "./static/css/Header.css";
function Header() {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 10L10 32H22L24 10" />
                <path d="M9 10H23M10 5L11 10H21L22 5" />
                <path d="M3 10H29L27 30H5L3 10Z" fill="currentColor" />
              </svg>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fas fa-home"></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>
                  <i className="fas fa-user-plus"></i> Register
                </Nav.Link>
              </LinkContainer>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <MDBBtn className="primary">
                  <i className="fas fa-search"></i>
                </MDBBtn>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M8 10L10 32H22L24 10" />
              <path d="M9 10H23M10 5L11 10H21L22 5" />
              <path d="M3 10H29L27 30H5L3 10Z" fill="currentColor" />
            </svg>
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav">
          <i class="bi bi-arrow-down-square"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" exact className="nav-link">
                <i className="fas fa-home"></i> Home
              </NavLink>
              <NavLink to="/products" className="nav-link">
                <i className="fas fa-shopping-cart"></i> Cart
              </NavLink>
              <NavLink to="/about" className="nav-link">
                <i className="fas fa-user"></i> Login
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                <i className="fas fa-user-plus"></i> Register
              </NavLink>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <MDBBtn className="primary">
                  <i className="fas fa-search"></i>
                </MDBBtn>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
