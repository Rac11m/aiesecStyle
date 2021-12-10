import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardItem.css";

const CardItem = (props) => (
  <Container className="py-5 d-grid gap-2">
    <Card
      className="card-style"
      style={{ borderRadius: "30px", margin: "auto" }}
    >
      <Card.Img variant="top" src={props.image_url} />
      <Card.Body style={{ margin: "auto" }}>
        <Card.Title>{props.title}</Card.Title>
        <Button
          className={props.class}
          variant="primary"
          size="lg"
          style={{ backgroundColor: "#477DEE" }}
        >
          Explore
        </Button>
      </Card.Body>
    </Card>
  </Container>
);
export default CardItem;
