import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderShop from "../HeaderShop/HeaderShop";
import Footer from "../Footer/Footer";
import { useShopContext } from "../context/ShopContext";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Shop() {
  const { addProductToCart } = useShopContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://joker69.pythonanywhere.com/image/all")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderShop />
      <Container>
      <div className="flex flex-row gap-4 my-8 justify-center items-center">
        <h4>Tìm kiếm sản phẩm:</h4>
        <Form className="d-flex w-[50%]">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
          </Form>
      </div>
      </Container>
      <div className="container mx-auto py-10">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {products.map((item) => (
              <div className="group relative overflow-hidden" key={item.id}>
                <img
                  src={item.image_url}
                  alt={item.image_name}
                  className="w-full"
                />
                <p>{item.image_name}</p>
                <div className="absolute z-30 delay-150 -bottom-20 left-0 right-0 flex items-center justify-center group-hover:bottom-10 transition-all duration-200 ease-linear">
                  <button
                    onClick={() => addProductToCart(item)}
                    className="hover:bg-[#DF4141] border py-[10px] px-5 text-sm hover:text-white bg-white transition-all duration-200"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;
