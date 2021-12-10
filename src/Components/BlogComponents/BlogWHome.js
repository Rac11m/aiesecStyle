import BlogWItem from "./BlogWItem";
import { Row, Col, Button, Alert, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import instagramIcon from "../../Images/instagramIcon.svg";
import facebookIcon from "../../Images/facebookIcon.svg";
import youtubeIcon from "../../Images/youtubeIcon.svg";
import linkedinIcon from "../../Images/linkedinIcon.svg";
import blogBigImg from "../../Images/blogImages/blogBigImg.svg";
import blogImg1 from "../../Images/blogImages/blogImg1.svg";
import blogImg2 from "../../Images/blogImages/blogImg2.svg";
import blogImg3 from "../../Images/blogImages/blogImg3.svg";
import "./BlogStyle.css";

const BlogWhome = (props) => {
  const leftDatas = {
    keye: "0",
    image_url: blogBigImg,
    information: "Lorem ipsum dolor sit amet, consetetur "
  };
  const rightDatas = [
    {
      keye: "1",
      image_url: blogImg1,
      information: "Lorem ipsum dolor sit amet, consetetur ",
      main_image: blogImg1,
      title_information: "cultural informational picture",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: "aiesecLogo"
    },
    {
      keye: "2",
      image_url: blogImg2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      keye: "3",
      image_url: blogImg3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "20% 0"
        }}
      >
        <h1>Our Blog</h1>
        <h2>Get ready for the future with aiesec.</h2>
        <Alert
          style={{
            width: "50%",
            margin: "auto",
            backgroundColor: "white",
            border: "none",
            filter: "drop-shadow(0px 2px 4px #707070)"
          }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="enjoy with our blogs & achievements"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ backgroundColor: "#477DEE" }}>Search</Button>
          </Form>
        </Alert>
        <div style={{ textAlign: "center" }}>
          <img className="blog-home-icons" alt="Icons" src={facebookIcon} />
          <img className="blog-home-icons" alt="Icons" src={youtubeIcon} />
          <img className="blog-home-icons" alt="Icons" src={instagramIcon} />
          <img className="blog-home-icons" alt="Icons" src={linkedinIcon} />
        </div>
      </div>
      <div>
        <Row>
          <Col md>
            <BlogWItem
              key={leftDatas.keye}
              {...leftDatas}
              styleName="blogBigImg"
            />
          </Col>
          <Col md>
            {rightDatas.map((leftData) => (
              <BlogWItem key={leftData.keye} {...leftData} />
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogWhome;
