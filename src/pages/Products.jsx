import Card from "react-bootstrap/Card";
import "./css/Products.css";

export default function Products({ products, carts, setCarts }) {
  return (
    <div className="page-container">
      <div className="products-itemps-container">
        {products.map((product) => (
          <Card className="product-card" key={product.id}>
            <Card.Img variant="top" src={product.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text><b>${product.price.toFixed(2)}</b></Card.Text>
              {carts.find((cart) => cart.id === product.id) ? (
                <span className="badge bg-danger">Added</span>
              ) : (
                <button className="btn btn-outline-gold" onClick={() => setCarts([...carts, product])}>Add To Carts</button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
