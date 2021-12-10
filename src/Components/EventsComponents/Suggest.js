import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SuggestItem from "./SuggestItem";
import suggested1 from "../../Images/suggestedImages/suggested1.png";
import suggested2 from "../../Images/suggestedImages/suggested2.png";
import suggested3 from "../../Images/suggestedImages/suggested3.png";
import halfSquare2 from "../../Images/blogImages/halfSquare2.png";
import "../BlogComponents/BlogStyle.css";

const Suggest = () => {
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
        <img src={halfSquare2} className="half-square-2-s" alt="halfSquare2" />

        <h1
          style={{
            fontSize: "30px",
            fontWeight: "medium",
            fontFamily: "Poppins",
            margin: "50px 0"
          }}
        >
          Suggested for you
        </h1>
      </Container>
      <Container>
        <Row>
          {ourEventsDatas.map((ourEventsData) => (
            <Col sm>
              <SuggestItem key={ourEventsData.key} {...ourEventsData} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Suggest;
