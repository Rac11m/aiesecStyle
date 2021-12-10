import { Col, Container, Row } from "react-bootstrap";

import '../Styles/Our.css';

const OurOur = () => {
    return (
        <Container fluid className="py-5">
        <Row className="our">
            <Col className="me-5">
              <p className="titl"><span className="span-col">OUR</span>Process</p>
              <p className="par">If you are thinking about doing an internship 
              or voluntary work abroad, don’t hesitate to sign-up.</p>
              <p className="par">After signing up, you will be contacted by one of 
              our members. We will invite you to the office 
              for a  chat. During this chat, you can tell us 
              what you like to do, where you want to go and
              when you would like to leave. We will also
              explain more about AIESEC and our process.</p>
              <p className="par">After the chat, you can start applying through 
              our online portal . In this portal, you can find 
              thousand of projects for which you can very 
              easily apply.</p>
              <p className="par-spe">
              Once you have found a project and you have been 
              accepted, we will prepare you for your experience 
              abroad and help you with the logistics.
              </p>
            </Col>
            <Col className="ms-5">
              <p className="titl"><span className="span-col">OUR</span>Services</p>
              <p className="sub-titl">Logistics Support</p>
              <p className='para'>We ensure you get the right visa, arrival pick-up information 
              before your experience and departure instructions
              post-experience.</p>
              <p className="sub-titl">Logistics Support</p>
              <p className='para'>We ensure you get the right visa, arrival pick-up information 
              before your experience and departure instructions
              post-experience.</p>
              <p className="sub-titl">Logistics Support</p>
              <p className='para'>We ensure you get the right visa, arrival pick-up information 
              before your experience and departure instructions
              post-experience.</p>
              <p className="sub-titl">Logistics Support</p>
              <p className='para'>We ensure you get the right visa, arrival pick-up information 
              before your experience and departure instructions
              post-experience.</p>
            </Col>
        </Row>
        </Container>
    );
}
export default OurOur;