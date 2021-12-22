import Aboutus from "../Components/Aboutus";
import Footer from "../Components/Footer";
import LEWA from "../Components/LEWA";
import NavBar from "../Components/Navbar";
import OurFeatures from "../Components/OurFeatures";
import OurOur from "../Components/OurOur";
import OurPartner from "../Components/OurPartner";
import OurProduct from "../Components/OurProduct";
import Popular from "../Components/Popular";
import Welcome from "../Components/Welcome";

const Main = () => {
  return (
    <>
    <NavBar /> 
      <Welcome />
      <OurFeatures />
      <Popular />
      <Aboutus />
      <OurProduct />
     <OurOur />
     {/*  <OurPartner /> */} 
      <LEWA />
      <Footer />
    </>
  );
};

export default Main;
