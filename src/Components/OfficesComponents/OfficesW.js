import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  InputGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import searchIconWhite from "../../Images/officesImages/searchIconWhite.svg";
import officesImg from "../../Images/officesImages/officesImg.png";
import "./OfficesStyle.css";

const OfficesW = () => {
  return (
    <Container style={{ padding: "0", marginBottom: "100px" }}>
      <Row style={{ padding: "0" }}>
        <Col style={{ margin: "auto" }}>
          <h1 style={{ fontSize: "70px" }}>Our Offices</h1>

          <p style={{ padding: "30px 50% 30px 0", lineHeight: "2.2" }}>
            Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,{" "}
          </p>
          <InputGroup className="my-3 explorer offices-explore-control">
            <InputGroup.Text
              id="btnGroupAddon"
              className="shadow exp-btn py-3 px-4"
              style={{
                backgroundColor: "white",
                borderRadius: "10px 0 0 10px"
              }}
            >
              Explorer
            </InputGroup.Text>

            <FormControl
              placeholder=" Explorer our LCs & Offices "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="place-exp shadow "
            />
            <Button
              variant="primary"
              size="lg"
              id="button-addon2"
              className="shadow btn-padding-exp"
              style={{
                backgroundColor: "#477DEE",
                width: "17.5%",
                borderRadius: "0 10px 10px 0"
              }}
            >
              <img width="20px" src={searchIconWhite} alt="searchIcon" />
            </Button>
          </InputGroup>
        </Col>
        <Col style={{ padding: "0" }}>
          <img
            style={{
              boxSizing: "border-box",
              width: "80%",
              float: "left"
            }}
            src={officesImg}
            alt="offImg"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default OfficesW;
