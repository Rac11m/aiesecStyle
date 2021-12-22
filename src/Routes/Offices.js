import Footer from "../Components/Footer";
import LEWA from "../Components/LEWA";
import NavBar from "../Components/Navbar"; 
import OfficesW from "../Components/OfficesComponents/OfficesW";
import OurOffices from "../Components/OfficesComponents/OurOffices";
import underline4 from "../Images/officesImages/underline4.svg";

const Offices = () => {
  return (
    <>
      <NavBar />
      <OfficesW />
      <OurOffices />
      <h1 style={{ textAlign: "center" }}>Want to join</h1>
      <img
        src={underline4}
        alt="underline 4"
        style={{
          width: "9.95%",
          position: "relative",
          left: "42%",
          bottom: "1.1em"
        }}
      />
    <LEWA/>
    <Footer />
    </>
  );
};
export default Offices;
