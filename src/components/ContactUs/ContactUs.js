import React, { useEffect, useState } from "react";
import Header from "../HeaderHome/Header";
import Footer from "../Footer/Footer";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function ContactUs() {
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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="relative"> 
        <img src="/contactUs.jpg" alt="" />
        <p className="absolute bottom-[70px] left-[63px] text-white text-[48px] leading-[48px]">CONTACT US</p>
      </div>
      {isSubmitted ? (
        <Container className="my-[100px]">
          <Row className="gap-4">
            <Col xs={8}>
              <h2 className="font-bold text-[36px] leading-[48px] mb-[200px]">
                Message sent. We'll contact you soon.
              </h2>
              <Button
                className="rounded-0"
                variant="primary"
                onClick={() => setIsSubmitted(false)}
              >
                <p className="text-[16px] m-0 p-1">GO BACK</p>
              </Button>
            </Col>
            <Col>
              <div className="mb-[50px]">
                <h3 className="text-[24px] font-bold leading-[48px]">
                  Visit Us
                </h3>
                <p className="m-0 text-[16px]">UET Lahore, Punjab, Pakistan</p>
                <p className="m-0 text-[16px]">Phone: +923039898987</p>
              </div>
              <div>
                <h3 className="text-[24px] font-bold leading-[48px]">
                  Get In Touch
                </h3>
                <p className="m-0 text-[16px]">
                  You can get in touch with us on this provided email.
                </p>
                <p className="m-0 text-[16px]">hmjawad087@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="my-[100px]">
          <Row className="gap-4">
            <Col xs={8}>
              <Form onSubmit={handleSubmit}>
                <h2 className="font-bold text-[36px] leading-[48px]">
                  We would love to hear from you.
                </h2>
                <p className="text-[16px] text-zinc-500 my-[35px]">
                  If you have any query or any type of suggestion, you can
                  contact us here. We would love to hear from you.
                </p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Form.Label className="text-[16px] font-medium">
                        Name
                      </Form.Label>
                      <Form.Control type="name" required />
                    </div>
                    <div className="flex-1">
                      <Form.Label className="text-[16px] font-medium">
                        Email
                      </Form.Label>
                      <Form.Control type="email" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-[16px] font-medium">
                    Message
                  </Form.Label>
                  <Form.Control as="textarea" rows={5} required />
                </Form.Group>
                <Button className="rounded-0" variant="primary" type="submit">
                  <p className="text-[16px] m-0 p-1">SEND MESSAGE</p>
                </Button>
              </Form>
            </Col>
            <Col>
              <div className="mb-[50px]">
                <h3 className="text-[24px] font-bold leading-[48px]">
                  Visit Us
                </h3>
                <p className="m-0 text-[16px]">UET Lahore, Punjab, Pakistan</p>
                <p className="m-0 text-[16px]">Phone: +923039898987</p>
              </div>
              <div>
                <h3 className="text-[24px] font-bold leading-[48px]">
                  Get In Touch
                </h3>
                <p className="m-0 text-[16px]">
                  You can get in touch with us on this provided email.
                </p>
                <p className="m-0 text-[16px]">hmjawad087@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
}
export default ContactUs;
