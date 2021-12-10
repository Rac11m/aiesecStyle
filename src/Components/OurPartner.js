
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import line from '../Images/Path1.svg';
import global from '../Images/GlobalSlide.svg';
import partG1 from '../Images/1partnerG.svg';
import partG2 from '../Images/2partnerG.svg';
import partG3 from '../Images/3partnerG.svg';
import partG4 from '../Images/4partnerG.svg';
import partR1 from '../Images/1partnerR.png';
import partR2 from '../Images/2partnerR.png';
import partR3 from '../Images/3partnerR.png';
import partR4 from '../Images/4partnerR.png';
import '../Styles/OurPartner.css';
import jp from '../Images/jpegtest.jpg';

const OurPartner = () => {
    const [state, setstate] = useState(true);

    const changeHandler = () => {
        setstate(!state);
    }

    return (
        
    <>
               <h2 className="main-title">Our Partner</h2>
                  <img className="img-line" src={line} width="13%" alt ="line" />
   
            
           {state ?
            <Col xs={11}>
                <h2  className='global'>Global</h2>
                <h2 onClick={changeHandler} className='next'>Regional</h2>
                
                <div style={{display: 'inline-flex'}} className="ps-4">
                <img src={partG1} alt="global1" />
                <img src={partG2} alt="global2" />
                <img src={partG3} alt="global3" />
                <img src={partG4} alt="global4" />
                </div>
               
           
            </Col>

           :
           <Col xs={11}>
                <h2  className='regional'>Regional  </h2>
                <h2 onClick={changeHandler} className='prev'>Global</h2>   
             {/*   <img src={partR1} alt="regional" />
                <img src={partR1} alt="regional1" />
                <img src={partR2} alt="regional2" />
           <img src={partR3} alt="regional3" /> */}


                <div  className="cropped">
                    <img style={{margin: 'auto'}} src={jp} width='150px' height='150px' alt="regional1" />
                </div>

                <div style={{display: 'inline-flex'}} className="ps-4">


                
                
                </div>
           </Col>

           }            
      
    </>
    );
};
export default OurPartner;