import { useState } from "react";
import Header from "../HeaderShop/HeaderShop";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiUserCircle } from "react-icons/bi";
import Form from "react-bootstrap/Form";

function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <>
      <Header />
      <Container className="my-4 h-[100%]">
        <Row className="h-[100%]">
          <Col className="mt-4">
            <div className="flex flex-row justify-between items-center">
              <h4>Thông tin nhận hàng</h4>
              <BiUserCircle className="h-[30px] w-[30px] text-blue-500" />
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Số điện thoại" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Địa chỉ" />
              </Form.Group>
              {/* <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Tỉnh thành" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Quận huyện" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Phường xã" />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ghi chú (tùy chọn)"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col className="mt-4">
            <h4>Vận chuyển</h4>
            <p className="bg-blue-100 p-[12px] rounded-md mb-10">
              Vui lòng nhập thông tin giao hàng
            </p>
            <h4>Thanh toán</h4>
            <Form className="border-[1px]">
              <div className="p-3 flex flex-col gap-2">
                <Form.Check
                  type="radio"
                  id="payment-vietqr"
                  label="Thanh toán qua VietQR"
                  value="vietqr"
                  checked={paymentMethod === "vietqr"}
                  onChange={handlePaymentMethodChange}
                />
                <Form.Check
                  type="radio"
                  id="payment-cod"
                  label="Thanh toán khi giao hàng (COD)"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                />
              </div>
            </Form>
          </Col>
          <Col className="border-l-[1px] border-x-gray-300 bg-zinc-100 pb-[300px]">
            <h4 className="border-b-[1px] m-0 p-3 mb-3">Đơn hàng (1 sản phẩm)</h4>
            <div className="flex flex-row justify-between items-center pb-3 border-b-[1px]">
              <div className="flex flex-row gap-2 items-center ">
                <img
                  className="border-[1px] rounded-md h-[60px]"
                  src="./images/product-1.webp"
                />
                <div>
                  <p className="m-0">Name</p>
                  <p className="m-0 text-gray-400">Size</p>
                </div>
              </div>
              <p>Price</p>
            </div>
            <div className="flex flex-row justify-between mt-6 border-b-[1px] pb-4">
              <div>
                <p className="mb-2">Tạm tính</p>
                <p className="m-0">Phí vận chuyển</p>
              </div>
              <div>
                <p className="mb-2">Price</p>
                <p className="m-0">0$</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-6">
              <h5>Tổng cộng</h5>
              <p>Price</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="m-0 text-sky-600">Quay về giỏ hàng</p>
              <button className="border-[1px] py-2 px-3 rounded-md text-white bg-sky-600 hover:bg-sky-400">ĐẶT HÀNG</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default CheckOut;
