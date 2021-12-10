import ResentItem from "./ResentItem";
import upResent from "../../Images/resentImages/upResent.svg";
import resentImg1 from "../../Images/resentImages/resentImg1.svg";
import resentImg2 from "../../Images/resentImages/resentImg2.svg";
import resentImg3 from "../../Images/resentImages/resentImg3.svg";
import resentImg4 from "../../Images/resentImages/resentImg4.svg";
import "./BlogStyle.css";
import halfSquare2 from "../../Images/blogImages/halfSquare2.png";

const ResentList = () => {
  const aboveResentTitle = {
    key: "0",
    image_url: upResent,
    information: "Lorem ipsum dolor sit amet, consetetur "
  };
  const ResentDatas = [
    {
      key: "0",
      image_url: resentImg1,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "1",
      image_url: resentImg2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "2",
      image_url: resentImg3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "3",
      image_url: resentImg4,
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  return (
    <div className="op">
      <ResentItem
        styleName="aboveResent"
        key={aboveResentTitle.key}
        {...aboveResentTitle}
      ></ResentItem>
      <img src={halfSquare2} className="half-square-2-r" alt="halfSquare2" />
      <h1>Resent</h1>
      {ResentDatas.map((ResentData) => (
        <ResentItem key={ResentData.key} {...ResentData} />
      ))}
    </div>
  );
};

export default ResentList;
