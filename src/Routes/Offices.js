import OfficesW from "../Components/OfficesComponents/OfficesW";
import OurOffices from "../Components/OfficesComponents/OurOffices";
import underline4 from "../Images/officesImages/underline4.svg";

const Offices = () => {
  return (
    <>
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
    </>
  );
};
export default Offices;
