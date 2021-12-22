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
import GreenBuble from "../../Images/GreenBuble.svg";
import BlueBuble from "../../Images/BlueBuble.svg";
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
    <div className="main-div">
      <img className="Gbuble" src={GreenBuble} alt="bubleG"/>
      <img className="Bbuble" src={BlueBuble} alt="bubleB"/>
      <div
        style={{
          textAlign: "center",
          padding: "20% 0",
          paddingTop: "7%"
        }}
      >
        <h1>Our Blog</h1>
        <h2>Get ready for the future with aiesec.</h2>
        <Alert
          style={{
            borderRadius: "15px",
            position: "relative",
            left: "60px",
            width: "830px",
       //     height: "120px",
            margin: "auto",
            backgroundColor: "white",
            border: "none",
            filter: "drop-shadow(0px 2px 4px #707070)",
            padding: "2.5rem",
          }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="    enjoy with our blogs & achievements"
              className="me-2"
              aria-label="Search"
              style={{
                verticalAlign: "center",
                height:"60px",
                borderStyle: "hidden",
                borderRadius: "6px",
             //   margin: "1rem 1rem auto 1rem",
                background: "rgba(72, 72, 72, 0.07)",
              }}
            />
            <Button style={{ 
              backgroundColor: "#477DEE",
              borderStyle: "hidden",
              borderRadius: "6px",
              height:"60px",
              width: "12rem",
              marginLeft: "1rem"
            //  margin: "1rem 1rem auto 1rem"
            }}
           >Search</Button>
          </Form>
        </Alert>
        <div style={{ textAlign: "center", marginLeft: "8rem" }}>
         <a href="https://facebook.com">
             <img className="blog-home-icons" alt="Icons" src={facebookIcon} />
         </a>
         
         <a href="https://facebook.com">
             <img className="blog-home-icons" alt="Icons" src={youtubeIcon} />
         </a>
         
         <a href="https://facebook.com">
             <img className="blog-home-icons" alt="Icons" src={instagramIcon} />
         </a>
         
         <a href="https://facebook.com">
             <img className="blog-home-icons" alt="Icons" src={linkedinIcon} />
         </a>
         
        </div>
      </div>
      <div style={{marginTop: "5rem"}}>
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
