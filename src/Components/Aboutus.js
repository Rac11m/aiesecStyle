import { Col, Container, Row } from "react-bootstrap";
import Aboutuus from '../Images/Aboutuus.jpg';
import line from '../Images/Path1.svg';
import  '../Styles/AboutUs.css';
import arrow from '../Images/arrow.svg';
const Aboutus = () => {
    return (
             
            <Container fluid>
            <h2 className="main-title">About Us</h2>
            <img className="img-line" src={line} width="15%" alt ="line" />
            <Row className="px-5">
                    <Col xs={7} style={{marginTop: '5rem'}}>
                    <p className="paraghrap-about" >
                    AIESEC is a global platform for young people<br/>to develop their leadership potential through<br/>international internships and volunteer  <br />opportunities. Founded in 1948, AIESEC is a <br/>non-governmental, and not-for-profit <br/>organization entirely run by youth for youth.
                    </p>
                    <a href="/main" className="read-more" >Read more</a>
                    <img src={arrow} alt='arrow' className="arrow"  height="15" style={{verticalAlign: 'baseline'}} />
                    </Col>
                    
                    <Col xs={5}>
                        <img src={Aboutuus} width="100%" alt='about_us' />
                    </Col>
                </Row>
            </Container>
            
    );
};
export default Aboutus;