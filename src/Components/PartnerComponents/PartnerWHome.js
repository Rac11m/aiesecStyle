import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import partnerHomeImg from "../../Images/partnerImages/partnerHomeImg.svg";
import "./PartnerStyle.css";

const PartnerWHome = () => {
  return (
    <Container style={{ padding: "0", marginBottom: "100px" }}>
      <Row>
        <Col sm style={{ margin: "auto" }}>
          <h1>Be one of Our partners</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,{" "}
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: "#477DEE", padding: "0.85rem 1.8rem" }}
          >
            Get in touch
          </Button>
        </Col>
        <Col sm>
          <img
            style={{
              boxSizing: "borger-box",
              width: "100%",
              paddingTop: "10%",
              float: "left"
            }}
            src={partnerHomeImg}
            alt="450 img"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default PartnerWHome;
