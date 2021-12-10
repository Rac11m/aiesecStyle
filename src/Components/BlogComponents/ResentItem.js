import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogStyle.css";

const ResentItem = (props) => {
  return (
    <Container className="mr">
      <Row>
        <Col>
          <img
            className={props.styleName}
            style={{
              boxSizing: "border-box",
              width: "100%",
              marginBottom: "12%"
            }}
            src={props.image_url}
            alt="item"
          />
        </Col>
        <Col>{props.information}</Col>
      </Row>
    </Container>
  );
};
export default ResentItem;
