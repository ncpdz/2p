import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiUserCircle } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";
import { useShopContext } from "../context/ShopContext";

function Header() {
  const { carts } = useShopContext();

  return (
    <div className="bg-gray-400 header-container">
      <Navbar expand="lg" className="container">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <p className="text-[36px] mb-0 mr-[100px]">2P-Fashion</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <p className="text-[16px] m-0 font-bold a">HOME</p>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                <p className="text-[16px] m-0 font-bold a">SHOP</p>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <p className="text-[16px] m-0 font-bold a">CONTACT US</p>{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <p className="text-[16px] m-0 font-bold a">ABOUT</p>{" "}
              </Nav.Link>
            </Nav>
            <div className="gap-4 d-flex flex items-center">
              <Nav.Link href="/">
                <BiUserCircle className="h-[30px] w-[30px]" />
              </Nav.Link>
              <div className="relative">
                <Nav.Link as={Link} to="/cart">
                  <BiCart className="h-[30px] w-[30px]" />
                </Nav.Link>
                <p className="absolute top-[-5px] right-[-10px] text-sm font-bold bg-red-500 rounded-[100%] w-[18px] h-[18px] text-center">
                  {carts.length}
                </p>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
