import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const FeuturedItem = (props) => (
  <Container style={{ padding: "0" }}>
    <Row>
      <Col style={{ textAlign: "center" }}>
        <img
          style={{
            boxSizing: "border-box",
            width: "100%"
          }}
          src={props.image_url}
          alt="item"
        />
        <p
          style={{
            position: "relative",
            bottom: "25%",
            color: "white",
            boxSizing: "border-box",
            width: "90%",
            margin: "auto",
            padding: "30px 27px",
            textAlign: "left",
            fontSize: "150%",
            borderRadius: "0 15px 35px 0",
            backgroundColor: "rgba(71, 125, 238, 0.71)",
            float: "left"
          }}
        >
          {props.information}
        </p>
      </Col>
    </Row>
  </Container>
);
export default FeuturedItem;
