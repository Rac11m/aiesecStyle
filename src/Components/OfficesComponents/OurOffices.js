import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "./CardItem";
import offices1 from "../../Images/officesImages/offices1.svg";
import offices2 from "../../Images/officesImages/offices2.svg";
import offices3 from "../../Images/officesImages/offices3.svg";
import offices4 from "../../Images/officesImages/offices4.svg";
import offices5 from "../../Images/officesImages/offices5.svg";
import offices6 from "../../Images/officesImages/offices6.svg";
import underline4 from "../../Images/officesImages/underline4.svg";

const OurOffices = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: offices1,
      title: "LC constantine",
      class: "btn-full-1"
    },
    {
      key: "1",
      image_url: offices2,
      title: "LC Babez",
      class: "btn-full-2"
    },
    {
      key: "2",
      image_url: offices3,
      title: "LC  Béjaïa ",
      class: "btn-full-3"
    },
    {
      key: "3",
      image_url: offices4,
      title: "LC Benak ",
      class: "btn-full-4"
    },
    {
      key: "4",
      image_url: offices5,
      title: "LC Blida ",
      class: "btn-full-5"
    },
    {
      key: "5",
      image_url: offices6,
      title: "LC  Ouargla ",
      class: "btn-full-6"
    }
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Offices</h1>
      <img
        src={underline4}
        alt="underline 4"
        style={{
          width: "9.95%",
          position: "relative",
          left: "42%",
          bottom: "1.1em"
        }}
      />
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <CardItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default OurOffices;
