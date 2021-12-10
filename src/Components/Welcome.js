import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, InputGroup ,FormControl, Button} from 'react-bootstrap';
import hiaiesec from '../Images/HiAiesec.svg';
import line from '../Images/Path1.svg';
import rect1 from '../Images/1strectangle.svg';
import rect2 from '../Images/2ndrectangle.svg';
import rect3 from '../Images/3rdrectangle.svg';
import rect4 from '../Images/4threctangle.svg';
import searchIcon from '../Images/searchIcon_white.svg';

import '../Styles/Welcome.css';
import { useState } from 'react';

const Welcome = () => {
    const [show, setShow] = useState(1);
    const rectangleOneHandler = () => {
        setShow(1);
    }
    const rectangleTwoHandler = () => {
        setShow(2);
    }
    const rectangleThreeHandler = () => {
        setShow(3);
    }
    const rectangleFourHandler = () => {
        setShow(4);
    }

    return(
        <>
        <Container fluid >
          <Row style={{marginLeft: '2rem'}}>
                 <Col xl={7} className="padding-colOne">
                 
                     { show === 1 && 
                     <div className="text-welcome">
                         <h1 className="main-header">m3a AIESEC | YOU ARE THE CHANGE !</h1>
                         <img src={line} width="33%" alt ="line" />
                         <p className="text-style">Develop yourself through a cross-cultural experience abroad.</p>
                    </div>
                     }
                     { show === 2 && 
                     <div>
                         <h1 className="main-header">m3a AIESEC | YOU ARE THE SOMETHING 2 !</h1>
                         <img src={line} width="33%" alt ="line" />
                         <p className="text-style">Develop yourself Something 2.</p>
                    </div>
                     }
                     { show === 3 && 
                     <div>
                         <h1 className="main-header">Volunteer | with AIESEC !</h1>
                         <img src={line} width="33%" alt ="line" />
                         <p className="text-style">Develop your leadership through a volunteering project abroad, contributing to one of the Sustainable Development Goals.</p>
                    </div>
                     }
                     { show === 4 && 
                     <div>
                         <h1 className="main-header">m3a AIESEC | YOU ARE THE SOMETHING 4 !</h1>
                         <img src={line} width="33%" alt ="line" />
                         <p className="text-style">Develop yourself Something 4.</p>
                    </div>
                     }
                  <div className="mb-5">  
                    <img onMouseEnter={rectangleOneHandler} className="rectangle" src={rect1}  alt ="rect1" />
                    <img onMouseEnter={rectangleTwoHandler} className="rectangle" src={rect2}  alt ="rect2" />
                    <img onMouseEnter={rectangleThreeHandler} className="rectangle" src={rect3}  alt ="rect3" />
                    <img onMouseEnter={rectangleFourHandler} className="rectangle" src={rect4}  alt ="rect4" />
                   </div>
                   <InputGroup className="my-3 explorer" >
             <InputGroup.Text id="btnGroupAddon" className='shadow exp-btn py-3 px-4'>Explorer</InputGroup.Text>

            <FormControl
               placeholder="               Search for Places & Milestones "
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"
               className="place-exp shadow"
            />
            <Button variant="primary" size="lg" id="button-addon2" className="shadow btn-padding-exp">
            <img width="20px" src={searchIcon} alt="searchIcon" /> 
            </Button>
  </InputGroup>
                </Col> 
                <Col className="style-image">
                <img src={hiaiesec} width='105%' alt="Hi_aiesec" /> 
                </Col> 
     </Row> 

        </Container>
        </>
    );
};

export default Welcome;