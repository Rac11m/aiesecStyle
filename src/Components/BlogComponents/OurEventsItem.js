import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogStyle.css";

const OurEventsItem = (props) => (
  <Container>
    <Row>
      <Col
        md
        style={{
          textAlign: "center",
          boxSizing: "border-box",
          width: "100%",
          margin: "0",
          padding: "0"
        }}
      >
        <img
          style={{
            boxSizing: "border-box",
            width: "100%",
            margin: "0",
            padding: "0"
          }}
          src={props.image_url}
          alt="item"
        />
        <p
          style={{
            position: "relative",
            bottom: "20%",
            color: "white",
            boxSizing: "border-box",
            width: "100%",
            margin: "0",
            padding: "0"
          }}
        >
          {props.information}
        </p>
      </Col>
    </Row>
  </Container>
);
export default OurEventsItem;
