import React, { useEffect, useState } from "react";
import Header from "../HeaderHome/Header";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './About.css'
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    let prevScrollPos = document.documentElement.scrollTop;
    const headerContainer = document.querySelector(".header-container");
    const headerHeight = headerContainer.offsetHeight;

    function handleScroll() {
      const currentScrollPos = document.documentElement.scrollTop;

      if (currentScrollPos > prevScrollPos) {
        headerContainer.style.top = `-${headerHeight}px`;
      } else {
        headerContainer.style.top = "0";
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="relative">
        <img src="/about.jpg" alt="" />
        <p className="absolute bottom-[70px] left-[63px] text-white text-[48px] leading-[48px]">
          ABOUT <span className="italic">2P-FASHION</span>{" "}
        </p>
      </div>
      <Container className="my-[60px]">
        <Row>
          <Col as={Link} to="/women" className="relative">
            <div className="image-container">
              <img className="w-[600px] h-[600px]" src="/women.png" />
            </div>
            <button className="absolute left-1/2 transform -translate-x-1/2 bottom-[30px] bg-white rounded-[26px]">
              <p className="text-[30px] text-blue-800 px-4 py-1 m-0">
                BUY NOW
              </p>
            </button>
          </Col>
          <Col as={Link} to="/men" className="relative">
            <div className="image-container">
              <img className="w-[600px] h-[600px]" src="/men.png" />
            </div>
            <button className="absolute left-1/2 transform -translate-x-1/2 bottom-[30px] bg-white rounded-[26px]">
              <p className="text-[30px] text-blue-800 px-4 py-1 m-0">
                BUY NOW
              </p>
            </button>
          </Col>
        </Row>
      </Container>
      <h2 className="text-center">The Founders</h2>
      <Footer />
    </>
  );
}

export default About;