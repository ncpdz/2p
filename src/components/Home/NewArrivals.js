import { Card, Row } from "react-bootstrap";
import "./Arri.css";
import { useShopContext } from "../context/ShopContext";

function Arrivals() {
  const cardImg = document.querySelectorAll(".card-img");
  const overlays = document.querySelectorAll(".overlay");
  const { addProductToCart } = useShopContext();
  cardImg.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
      overlays[index].style.display = "flex";
    });

    img.addEventListener("mouseleave", () => {
      overlays[index].style.display = "none";
    });
  });
  return (
    <div className="container">
      <div>
        <h2 className="text-center font-bold leading-[48px]">
          Discover NEW Arrivals
        </h2>
        <p className="text-center font-normal">Recently added shirts!</p>
      </div>
      <div>
        <Row xs={1} md={4} className="g-4 mt-4">
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 0 }}>
            <div class="image-container">
              <Card.Img variant="top" src="/card1.png" className="card-img" />
              <div class="overlay">
                <button onClick={addProductToCart} class="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">Plain White Shirt</Card.Title>
              <Card.Text style={{ color: "blue" }} className="text-center">
                $123
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
      <img src="/benefit.png" alt="" />
    </div>
  );
}
export default Arrivals;
