import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedItem from "./FeaturedItem";
import featured1 from "../../Images/featuredImages/featured1.png";
import featured2 from "../../Images/featuredImages/featured2.png";
import featured3 from "../../Images/featuredImages/featured3.png";
import underline4 from "../../Images/officesImages/underline4.svg";
import slideBar from "../../Images/slideBar.svg";
const Featured = () => {
  const ourEventsDatas = [
    {
      key: "0",
      image_url: featured1,
      information: "Lorem ipsum dolor"
    },
    {
      key: "1",
      image_url: featured2,
      information: "Lorem ipsum dolor"
    },
    {
      key: "2",
      image_url: featured3,
      information: "Lorem ipsum dolor"
    }
  ];
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "medium",
          fontFamily: "Poppins",
          margin: "50px 0"
        }}
      >
        Featured Events
      </h1>
      <img
        src={underline4}
        alt="underline 4"
        style={{
          width: "8.55%",
          position: "relative",
          left: "41.05%",
          bottom: "3.8em"
        }}
      />
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col>
              <FeaturedItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
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
    </>
  );
};
export default Featured;
