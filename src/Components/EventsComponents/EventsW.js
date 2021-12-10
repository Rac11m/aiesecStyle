import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel1 from "../../Images/carouselImages/carousel1.png";
import "./EventsStyle.css";
const EventsW = () => {
  return (
    <div>
      <Carousel style={{ zIndex: "-1" }} controls={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption className="events-caption">
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="Second slide" />

          <Carousel.Caption className="events-caption">
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="Third slide" />

          <Carousel.Caption className="events-caption">
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container
        style={{
          float: "center",
          position: "relative",
          bottom: "21rem",
          left: "3rem"
        }}
      >
        <Form>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="e.g name"
                className="events-form-control"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="category"
                className="events-form-control"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="location"
                className="events-form-control"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="date"
                className="events-form-control"
              />
            </Col>
            <Col>
              <Button className="events-form-search">search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
export default EventsW;
