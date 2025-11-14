import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/Carts.css";

export default function Carts({ carts, setCarts }) {
  // calculate total price
  const totalPrice = carts.reduce((prev, cart) => prev + cart.price, 0);

  return (
    <div className="page-container">
      <div className="products-itemps-container">
        {carts.length === 0 && <p className="text-black fs-5">Your cart is empty.</p>}

        {carts.map((cart) => (
          <Card className="product-card" key={cart.id}>
            <Card.Img variant="top" src={cart.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{cart.title}</Card.Title>
              <Card.Text>
                <b>${cart.price.toFixed(2)}</b>
              </Card.Text>
              <Button
                variant="outline-danger"
                onClick={() => setCarts(carts.filter((c) => c.id !== cart.id))}
              >
                Remove From Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Summary and Checkout */}
      {carts.length > 0 && (
        <div className="cart-summary">
          <h4 className="text-black">
            Items: {carts.length} &nbsp; | &nbsp; Total Price: $
            {totalPrice.toFixed(2)}
          </h4>
          <Button variant="warning">
            Checkout <i className="bi bi-credit-card"></i>
          </Button>
        </div>
      )}
    </div>
  );
}
