import React, {useRef} from "react";
import { Container } from "react-bootstrap";
import Global from "./Global";
import gt1 from '../Images/gt1.svg';
import gt2 from '../Images/gt2.svg';
import gte1 from '../Images/imen-lachheb.svg';
import gte2 from '../Images/laura-maria.svg';
import gv1 from '../Images/brenda.svg';
import gv2 from '../Images/gemrisha.svg';
import line from '../Images/Path1.svg';

import '../Styles/OurProduct.css';


const OurProduct = (props) => {
      

      return (
         <Container fluid style={{textAlign: 'center'}}>
             <h2 className="main-title">Our Product</h2>
             <img className="img-line" src={line} width="12%" alt ="line" />
            <Global 
            numero={0} 
            title="Global Talent" 
            src1={gt1} 
            src2={gt2} 
            alt1='gt1' 
            alt2='gt2'
             headingcol2="BECOME AN INTERN" 
            text={`“I had a chance to do a lot of research, to read a lot of papers, and to give recommendations to  know what can be implemented and will help the startup strategically.“`}
            
            />
         
          <Global numero={1} title="Global Teacher" src1={gte1} src2={gte2} alt1='gte1' alt2='gte2' headingcol2="BECOME A TEACHER"
            text={`“One highlight is discovering that 
            I can teach other people, something 
            that I always thought that I couldn't do! 
            More than that, I learned to be 
            responsible and independent
             in a totally different country.“`}  
         
             />
          
            <Global numero={2} title="Global Volunteer" styling="thirdImage" src1={gv1} src2={gv2} alt1='gv1' alt2='gv2' headingcol2="BECOME A VOLUNTEER" 
            text={`“I got to experience the whole package 
            through Project ArchiTech, from 
            interning in professional practice, 
            volunteering, travelling through the 
            country, and making lasting friendships.“`}
        
           /> 
           
          </Container> 
      )
};

export default OurProduct;