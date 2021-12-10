import { Row,Col, Container } from "react-bootstrap";
import singup from '../Images/sign-up-image.svg';
import '../Styles/LEWA.css';

const LEWA = () => {
    return (
        <Container fluid className="pb-5">
        <Row>
           <Col sm={5} >
                 <img src={singup} height='900' alt='sign-up_image' />
            </Col>  
            <Col className="colTwo" >
            <h2 >SIGN UP</h2>
            <p>Sign up through <a href="https://www.w3schools.com">www.aiesec.org</a></p>
            <h2 >APPOINTMENT</h2>
            <p >Your local AIESEC office will contact you to set up a meeting</p>
            <h2 >SEARCH & APPLY</h2>
            <p >Check out our online database  and search through thousands  of professional internships & voluntary projects</p>
            <h2>GET MATCHED</h2>
            <p >Found a project of your liking? Apply and get matched!</p>
            <h2>PREPARE & GO</h2>
            <p>We will prepare you for your experience abroad through a  preparation seminar</p>
    </Col> 
      </Row> 
        </Container>
    );
};

export default LEWA;