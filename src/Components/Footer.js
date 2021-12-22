import { Col, Row, FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import aiesecLogo from '../Images/aiesecLogo.svg';
import facebook from '../Images/facebook.svg';
import linkedin from '../Images/linkedin.svg';
import whatsapp from '../Images/whatsapp.svg';
import youtube from '../Images/youtube.svg';
import twitter from '../Images/twitter.svg';
import ScrollUp from '../Images/ScrollUp.svg';
import '../Styles/Footer.css';

const Footer = () =>{
    return (
        <Container fluid style={{padding:"5rem 5rem 0 5rem", textAlign: 'center'}} >
        <img src={aiesecLogo} alt='logobig' className='py-5' width="600px"/>

            <Row className="Footer-row">
                <Col className="pt-5 align">
                <h4 className='headers'>About</h4>
                <p>About us</p>
                <p>Annual Report</p>

                <h4 className='headers'>Organizations</h4>
                <p className="">Partner with us</p>
                <p>Pricing</p>
                </Col>
                
                <Col className="pt-5 align">
                <h4 className='headers'>Youth</h4>
                <p>Youth 4 Global Goals</p>
                <p>Youth Speak</p>
                <div className='social'>

                             <a style={{margin: '0.5rem'}} href="https://facebook.com">
                                     <img width="40px" src={facebook} alt="facebook" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://linkedin.com">
                                     <img width="40px" src={linkedin} alt="linkedin" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://youtube.com">
                                     <img width="40px" src={youtube} alt="youtube" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://whatsapp.com">
                                     <img width="40px" src={whatsapp} alt="whatsapp" />
                             </a>
                             <a style={{margin: '0.5rem'}} href="https://twitter.com">
                                     <img width="40px" src={twitter} alt="twitter" />
                             </a>  
                    <p className='copyright'>
                     Powered by  AIESEC <br/>
                 ©   1948-2021  AIESEC
                    </p>

                    </div>
                </Col>
                
                <Col className="pt-5 align">
                <h4 className='headers'>NEWS LATTER</h4>
                <p>stay update with last offers and news</p>
                
                <InputGroup style={{paddingLeft: '0', paddingRight: '7rem', marginBottom: '2rem', minHeight: "60px"}}>

    <FormControl 
      type="email"
      placeholder="   Enter your email"
      aria-label="email"
      aria-describedby="basic-addon2"
      style={{borderStyle: 'solid',borderRadius: '10px' ,borderWidth: '3px', borderColor: '#477DEE'}}
    />
    <Button style={{borderStyle: 'solid',borderRadius: '10px' ,borderWidth: '3px', position: "relative", left:"-15px",BackgroundColor:"#477DEE", paddingLeft: "2rem", paddingRight: "2rem"}}  size="lg" id="button-addon2">
    Send 
    </Button>
  </InputGroup>


                <h4 className='headers'>Membership</h4>

                <p>Join Us</p>
                <p>Find your country!</p>
                
                </Col>
            </Row>
        </Container>   
    );
};
export default Footer;