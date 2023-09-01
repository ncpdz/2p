import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../HeaderShop/HeaderShop";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Show.css";
import { useShopContext } from "../context/ShopContext";

function Show() {
  const { addProductToCart } = useShopContext();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(false);
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setSizeSelected(true);
  };
  const handleAddToCartClick = () => {
    if (!selectedSize) {
      setAddToCartClicked(true);
      return;
    }

    const productToAdd = {
      id: product.id,
      name: product.image_name,
      size: selectedSize,
      quantity: quantity,
      price: product.price_value * quantity,
    };

    addProductToCart(productToAdd);

    setAddToCartClicked(true);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    axios
      .get("https://joker69.pythonanywhere.com/image/all")
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!product) {
    return null;
  }
  return (
    <>
      <Header />
      <div className="my-[40px]">
        <Container>
          <Row>
            <Col>
              <div className="flex justify-center items-center">
                <img className="" src={product.image_url} alt="Product" />
              </div>
            </Col>
            <Col className="flex flex-col gap-2">
              <h2 className="font-bold text-[36px] leading-[48px]">
                {product.image_name}
              </h2>
              <h3 className="text-[#024E82]">${product.price_value}</h3>
              <h3>Size</h3>
              <div className="wrap-size">
                <span className="item-radio">
                  <input
                    data-product_id="890274"
                    name="pa_size"
                    type="radio"
                    id="input-size-1"
                    value="size-1"
                    checked={selectedSize === "size-1"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="input-size-1" className="m-radio-label">
                    S
                  </label>
                </span>
                <span className="item-radio">
                  <input
                    data-product_id="890275"
                    name="pa_size"
                    type="radio"
                    id="input-size-2"
                    value="size-2"
                    checked={selectedSize === "size-2"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="input-size-2" className="m-radio-label">
                    M
                  </label>
                </span>
                <span className="item-radio">
                  <input
                    data-product_id="890276"
                    name="pa_size"
                    type="radio"
                    id="input-size-3"
                    value="size-3"
                    checked={selectedSize === "size-3"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="input-size-3" className="m-radio-label">
                    L
                  </label>
                </span>
                <span className="item-radio">
                  <input
                    data-product_id="890276"
                    name="pa_size"
                    type="radio"
                    id="input-size-4"
                    value="size-4"
                    checked={selectedSize === "size-4"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="input-size-4" className="m-radio-label">
                    XL
                  </label>
                </span>
              </div>
              {addToCartClicked && !selectedSize && (
                <p className="text-red-500">
                  Vui lòng chọn kích thước trước khi thêm vào giỏ hàng!
                </p>
              )}
              <div className="quantity flex flex-row gap-4 items-center">
                <p className="text-[25px] font-extralight">Số lượng:</p>
                <div className="quantity-controls text-[25px] font-extralight">
                  <button
                    className="quantity-button minus"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input font-extralight"
                    value={quantity}
                    min="0"
                    readOnly
                  />
                  <button
                    className="quantity-button plus"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={handleAddToCartClick}
                  disabled={addToCartClicked && !selectedSize}
                  className="hover:bg-[#0089ff] px-[35px] border-[2px] py-2 bg-[#ed1c24] text-white font-semibold"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Show;
