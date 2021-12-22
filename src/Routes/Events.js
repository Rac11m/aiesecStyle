import EventsW from "../Components/EventsComponents/EventsW";
import Suggest from "../Components/EventsComponents/Suggest";
import UpComing from "../Components/EventsComponents/UpComing";
import Featured from "../Components/EventsComponents/Featured";
import Navbar from "../Components/Navbar";
import OurPartner from "../Components/OurPartner";
import Footer from "../Components/Footer";
const Events = () => {
  return (
    <>
      <Navbar />
      <EventsW />
      <UpComing />
      <Suggest />
      <Featured />
      <OurPartner />
      <Footer />
    </>
  );
};
export default Events;
