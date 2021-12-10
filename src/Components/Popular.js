import { Col, Container, Row } from "react-bootstrap";
import image1 from '../Images/image1.svg';
import image2 from '../Images/image2.svg';
import image3 from '../Images/image3.svg';
import image4 from '../Images/image4.svg';
import '../Styles/OurFeatures.css';

const Popular = () => {
    return (
        <Container fluid className="container-dis">
        <h5 className="main-h5">Popular</h5>
        <h3 className="main-h2 ms-3 pt-5">Our Blog</h3>
             <Container fluid>
                     <Row>
                    <Col>
                        <img src={image1} width="400px" height="400px" alt='image1' />
                        <div className="back">
                        <p className="image-title"> Lorem ipusem</p>
                     </div>
                    </Col>
                    <Col>
                    <img src={image2} width="420px" height="420px" alt='image2' />
                    <div className="back-2">
                   <p className="image-title"> Lorem ipusem</p>
                     </div>
                    </Col>
                    <Col>
                    <img src={image3} width="400" height="400" alt='image3' />
                    <div className="back">
                    <p className="image-title"> Lorem ipusem</p>
                     </div>
                   
                    </Col>
                    <Col>
                    <img src={image4} width="400" height="400" alt='image4' />
                    <div className="back">
                    <p className="image-title"> Lorem ipusem</p>
                     </div>
                    </Col>
                     </Row>
                    
              </Container>

        </Container>
    );   
}
export default Popular;