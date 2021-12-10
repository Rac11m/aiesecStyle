import { Row, Col, Container } from "react-bootstrap";
import '../Styles/Global.css';
import arrowBack from '../Images/arrow-back.svg';
import arrowForward from '../Images/arrow-forward.svg';
const Global = (props) => {
       
      const condition = props.numero % 2 === 0 ? true : false
    

      return (
          <Container fluid>
             <p className='global-title'>{props.title}</p>

       
         {condition ?
         <Row xs={11} md={4} lg={12}>
         <Col >
         <img className={props.styling} width="99%" src={props.src1} alt={props.alt1} />
         </Col> 
         <Col >
         <img className={props.styling} width="99%" src={props.src2} alt={props.alt2} />
         </Col> 
               <Col className="col-text-right">
               <h3 className="become-h3-right">{props.headingcol2}</h3>
                 <p className="become-text-right">
                   {props.text}
                 </p>
                 <p className="Hager">Hager BensassiIntern in Indonesia</p>
                 <a href="/" className=" learn-more" >Learn more</a>
                 <img className="arrowB-position"  src={arrowBack} alt="arrowback" />
                 <img className="arrowF-position"  src={arrowForward} alt="arrowforward" />
               </Col>
               </Row>
          :  
          <Row xs={12} md={4} lg={11}>
                 <Col className="col-text-left">
               <h3 className="become-h3-left">{props.headingcol2}</h3>
                 <p className="become-text-left">
                   {props.text}
                 </p>
                 <p className="Hager">Hager BensassiIntern in Indonesia</p>
                 <a href="/" className="learn-more-left" >Learn more</a>
                 <img className="arrowBL-position"  src={arrowBack} alt="arrowback" />
                 <img className="arrowFL-position"  src={arrowForward} alt="arrowforward" />
               </Col>
               <Col  className="col-img-left">
         <img width="100%" src={props.src1} alt={props.alt1} />
         </Col> 
         <Col >
         <img width="100%" src={props.src2} alt={props.alt2} />
         </Col> 

          </Row>  }
        
          </Container>
      )
} ;

export default Global;