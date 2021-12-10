import OurEventsItem from "./OurEventsItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ourEvent1 from "../../Images/ourEventsImages/ourEvent1.svg";
import ourEvent2 from "../../Images/ourEventsImages/ourEvent2.svg";
import ourEvent3 from "../../Images/ourEventsImages/ourEvent3.svg";
import ourEvent4 from "../..//Images/ourEventsImages/ourEvent4.svg";
import slideBar from "../../Images/slideBar.svg";
import halfSquare2 from "../../Images/blogImages/halfSquare2.png";
import "./BlogStyle.css";

const OurEventsList = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: ourEvent1,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "1",
      image_url: ourEvent2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "2",
      image_url: ourEvent3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "3",
      image_url: ourEvent4,
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  return (
    <Container style={{ padding: "0" }}>
      <img src={halfSquare2} alt="halfSquare" className="half-square-2-e" />
      <h1>Our Events</h1>
      <Container style={{ padding: "0" }}>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col
              lg
              key={ourEventsData.key}
              style={{ padding: "0", margin: "0" }}
            >
              <OurEventsItem
                key={ourEventsData.key}
                {...ourEventsData}
                style={{ margin: "0", padding: "0" }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <img
        src={slideBar}
        alt="slideBar"
        style={{
          width: "7.5%",
          display: "block",
          margin: "auto",
          position: "relative",
          bottom: "30px"
        }}
      />
    </Container>
  );
};

export default OurEventsList;
