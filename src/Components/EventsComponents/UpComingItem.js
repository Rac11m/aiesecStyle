import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const UpComingItem = (props) => (
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
            bottom: "18%",
            color: "white",
            boxSizing: "border-box",
            width: "100%",
            textAlign: "left",
            padding: "0 13%"
          }}
        >
          {props.information}
        </p>
      </Col>
    </Row>
  </Container>
);
export default UpComingItem;
