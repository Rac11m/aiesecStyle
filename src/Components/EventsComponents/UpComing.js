import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UpComingItem from "./UpComingItem";
import upComing1 from "../../Images/upComingImages/upComing1.png";
import upComing2 from "../../Images/upComingImages/upComing2.png";
import upComing3 from "../../Images/upComingImages/upComing3.png";
import upComing4 from "../../Images/upComingImages/upComing4.png";
import underline4 from "../../Images/officesImages/underline4.svg";
import "../EventsComponents/EventsStyle.css";

const UpComing = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: upComing1,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "1",
      image_url: upComing2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "2",
      image_url: upComing3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "3",
      image_url: upComing4,
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  const ourEventsDatas2 = [
    {
      key: "4",
      image_url: upComing1,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "5",
      image_url: upComing2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "6",
      image_url: upComing3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "7",
      image_url: upComing4,
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "500",
            fontFamily: "Poppins",
            margin: "50px 0"
          }}
        >
          Upcoming Events
        </h1>
        <img
          src={underline4}
          alt="underline 4"
          style={{
            width: "8.55%",
            position: "relative",
            left: "40.45%",
            bottom: "3.8em"
          }}
        />
      </div>
      <Container>
        <Nav justify className="nav-pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-0">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-1">Category 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-2">Category 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" eventKey="link-3">Category 3</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col sm>
              <UpComingItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
        <Row>
          {ourEventsDatas2.map((ourEventsData) => (
            <Col sm>
              <UpComingItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default UpComing;
