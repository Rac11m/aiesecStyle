import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogStyle.css";

const BlogWItem = (props) => {
  if (props.styleName === "blogBigImg") {
    return (
      <Row>
        <Col md style={{ textAlign: "center" }}>
          <img
            style={{
              boxSizing: "border-box",
              width: "100%",
              paddingLeft: "20px"
            }}
            src={props.image_url}
            alt="img_url"
          />
          <p
            style={{
              boxSizing: "border-box",
              width: "100%",
              position: "relative",
              bottom: "20%",
              color: "white"
            }}
          >
            {props.information}
          </p>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col>
          <img
            style={{
              boxSizing: "border-box",
              width: "100%",
              marginBottom: "12%"
            }}
            src={props.image_url}
            alt="img_url"
          />
        </Col>
        <Col className={props.styleName}>
          <p style={{ boxSizing: "border-box", width: "100%" }}>
            {props.information}
          </p>
        </Col>
      </Row>
    );
  }
};
export default BlogWItem;
