import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const LCEventsItem = (props) => {
  return (
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
              bottom: "26%",
              boxSizing: "border-box",
              width: "68%",
              margin: "auto",
              padding: "13px 0",
              backgroundColor: "rgb(255,255,255,76%)",
              borderRadius: "8px",
              fontSize: "100%"
            }}
          >
            {props.information}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default LCEventsItem;
