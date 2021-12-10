import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin
} from "react-icons/fa";
import LCEventsItem from "./LCEventsItem";
import suggested1 from "../../Images/suggestedImages/suggested1.png";
import suggested2 from "../../Images/suggestedImages/suggested2.png";
import suggested3 from "../../Images/suggestedImages/suggested3.png";
import "../BlogComponents/BlogStyle.css";
const LCW = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: suggested1,
      information: "Lorem ipsum"
    },
    {
      key: "1",
      image_url: suggested2,
      information: "Lorem ipsum"
    },
    {
      key: "2",
      image_url: suggested3,
      information: "Lorem ipsum"
    }
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>LC constantine</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,{" "}
            </p>
            <Form>
              <Form.Label>Explore</Form.Label>
              <Form.Control
                type="text"
                placeholder="Explorer our LCs & Offices"
              ></Form.Control>
              <Button />
            </Form>
            <div>
              <FaFacebookSquare />
              <FaYoutubeSquare />
              <FaInstagramSquare />
              <FaLinkedin />
            </div>
          </Col>
          <Col>
            <img src="https://via.placeholder.com/450" alt="450 img" />
          </Col>
        </Row>
      </Container>
      <h1>#Popular</h1>
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <LCEventsItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <h4>{`<---  -->`}</h4>
          </Col>
          <Col>
            <Button variant="outline-dark">view all </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LCW;
