import { useState } from "react";
import { Col } from "react-bootstrap";
import line from "../Images/Path1.svg";
import global from "../Images/GlobalSlide.svg";
import partG1 from "../Images/1partnerG.svg";
import partG2 from "../Images/2partnerG.svg";
import partG3 from "../Images/3partnerG.svg";
import partG4 from "../Images/4partnerG.svg";
import partR1 from "../Images/1partnerR.png";
import partR2 from "../Images/2partnerR.png";
import partR3 from "../Images/3partnerR.png";
import partR4 from "../Images/4partnerR.png";
import "../Styles/OurPartner.css";
import jp from "../Images/jpegtest.jpg";

const OurPartner = () => {
  const [state, setstate] = useState(true);

  const changeHandler = () => {
    setstate(!state);
  };

  return (
    <>
      <div className="partner-heading">
        <h2>Our Partner</h2>
        <img src={line} width="13%" alt="line" />
      </div>
      {state ? (
        <Col xs={11}>
          <h2 className="global">Global</h2>
          <h2 onClick={changeHandler} className="next">
            Regional
          </h2>

          <div  className="row our-partner-container">
            <img className="col-lg-3 col-md-6" src={partG1} alt="global1" />
            <img className="col-lg-3 col-md-6" src={partG2} alt="global2" />
            <img className="col-lg-3 col-md-6" src={partG3} alt="global3" />
            <img className="col-lg-3 col-md-6" src={partG4} alt="global4" />
          </div>
        </Col>
      ) : (
        <Col xs={11}>
          <h2 className="regional">Regional </h2>
          <h2 onClick={changeHandler} className="prev">
            Global
          </h2>
          <div className="row our-partner-container">
          <img className="col-lg-3 col-md-6" src={partR1} alt="regional" />
          <img className="col-lg-3 col-md-6" src={partR1} alt="regional1" />
          <img className="col-lg-3 col-md-6" src={partR2} alt="regional2" />
          <img className="col-lg-3 col-md-6" src={partR3} alt="regional3" />
          </div>
          {/* <div className="cropped">
            <img
              style={{ margin: 0 }}
              src={jp}
              width="150px"
              height="150px"
              alt="regional1"
            />
          </div>

          <div style={{ display: "inline-flex" }}></div> */}
        </Col>
      )}
    </>
  );
};
export default OurPartner;
