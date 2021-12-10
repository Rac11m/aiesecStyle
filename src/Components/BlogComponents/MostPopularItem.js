import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogStyle.css";

const MostPopularItem = (props) => (
  <Container className="mr">
    <Row>
      <Col>
        <img
          style={{
            boxSizing: "border-box",
            width: "100%",
            marginBottom: "12%"
          }}
          src={props.image_url}
          alt="item"
        />
      </Col>
      <Col>
        <p style={{ boxSizing: "border-box", width: "100%" }}>
          {props.information}
        </p>
      </Col>
    </Row>
  </Container>
);
export default MostPopularItem;
