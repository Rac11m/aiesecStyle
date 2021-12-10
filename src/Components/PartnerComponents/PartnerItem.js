import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PartnerStyle.css";
const PartnerItem = (props) => {
  if (props.condition) {
    return (
      <Container className="partner-item-img">
        <Row>
          <Col>
            <h3 className="partner-spacing">{props.partnerTitle}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <h2 style={{ fontWeight: "bold" }}>{props.title}</h2>
            <p className="partner-text">{props.content}</p>
          </Col>
          <Col sm>
            <Row>
              <Col style={{ padding: "0" }}>
                <img
                  src={props.imgOne}
                  className="partner-image-position-t"
                  alt="anAlt"
                />
              </Col>
              <Col style={{ padding: "0" }}>
                <img
                  src={props.imgTwo}
                  className="partner-image-position-b"
                  alt="anAlt"
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: "0" }}>
                <img
                  src={props.imgThree}
                  className="partner-image-position-t"
                  alt="anAlt"
                />
              </Col>
              <Col style={{ padding: "0" }}>
                <img
                  src={props.imgFour}
                  className="partner-image-position-b"
                  alt="anAlt"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="partner-item-img">
        <Row>
          <Col>
            <h3 className="partner-spacing">{props.partnerTitle}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Row>
              <Col>
                <img
                  src={props.imgOne}
                  className="partner-image-position-b"
                  alt="anAlt"
                />
              </Col>
              <Col>
                <img
                  src={props.imgTwo}
                  className="partner-image-position-t"
                  alt="anAlt"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={props.imgThree}
                  className="partner-image-position-b"
                  alt="anAlt"
                />
              </Col>
              <Col>
                <img
                  src={props.imgFour}
                  className="partner-image-position-t"
                  alt="anAlt"
                />
              </Col>
            </Row>
          </Col>
          <Col sm>
            <h2 style={{ fontWeight: "bold" }}>{props.title}</h2>
            <p className="partner-text">{props.content}</p>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default PartnerItem;
