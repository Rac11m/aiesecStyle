import BlogWHome from "./BlogWHome";
import MostPopularList from "./MostPopularList";
import OurEventsList from "./OurEventsList";
import ResentList from "./ResentList";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const BlogW = () => {
  return (
    <>
      <BlogWHome />
      <Container>
        <Row>
          <Col sm={7}>
            <MostPopularList />
          </Col>
          <Col sm={5}>
            <ResentList />
          </Col>
        </Row>
      </Container>
      <OurEventsList />
    </>
  );
};
export default BlogW;
