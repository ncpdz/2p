import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../HeaderShop/HeaderShop";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://joker69.pythonanywhere.com/image/all"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm ra khỏi giỏ hàng không?");
    if (!confirmed) {
      return;
    }

    try {
      // Update the state to reflect the deletion
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );

      // Make the delete request
      await axios.delete(
        `https://joker69.pythonanywhere.com/image/${productId}`
      );

      console.log("Product deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container className="my-4">
        <h4>Giỏ hàng của bạn</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ảnh sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img className="h-[100px]" src={product.image_url} alt={product.image_name} />
                </td>
                <td>{product.image_name}</td>
                <td>{product.price_value}</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;