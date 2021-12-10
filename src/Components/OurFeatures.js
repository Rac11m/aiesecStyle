import { Col, Container, Row } from "react-bootstrap";
import airplane from '../Images/airplane.svg';
import Earth from '../Images/hold-world.svg';
import hotel from '../Images/hotel.svg';

import '../Styles/OurFeatures.css';

const OurFeatures = () => {
    return (
        <Container fluid className='pt-5 container-dis'>
        <h5 className="main-h5">Our Features</h5>
        <Container fluid>
            <Row>
                <Col xs={2} className="pt-5" >
                  <h2 className="main-h2">Explorer <br /> Our Features</h2>
                </Col>

                <Col className="text-left Col-padding" >
                    <Row style={{padding: '3rem'}}>
             
                        <Col style={{margin: 'auto 0'}}>
                        <img src={airplane} alt='airplane' />
                        <div className="stats-div">
                        <p className="stats">114</p>
                        <p className="sub-stat">Countries & Territories</p>
                        </div>
                        
                        </Col>
                        
                        <Col style={{margin: 'auto 0'}}>
                        <img src={Earth} alt='earth' />

                        <div className="stats-div">
                        <p className="stats">+ 7,000</p>
                        <p className="sub-stat">Partner Organizations</p>

                        </div>
                        </Col>
                        
                        <Col style={{margin: 'auto 0'}}>
                        <img src={hotel} alt='hotel' />

                        <div className="stats-div" >
                        <p className="stats">+ 30,000</p>
                        <p className="sub-stat">Experiences Every Year</p>

                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Container>
    );   
}
export default OurFeatures;