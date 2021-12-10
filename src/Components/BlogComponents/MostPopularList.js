import MostPopularItem from "./MostPopularItem";
import mostPopularImg1 from "../../Images/mostPopularImages/mostPopularImg1.svg";
import mostPopularImg2 from "../../Images/mostPopularImages/mostPopularImg2.svg";
import mostPopularImg3 from "../../Images/mostPopularImages/mostPopularImg3.svg";
import "./BlogStyle.css";
import halfSquare2 from "../../Images/blogImages/halfSquare2.png";

const MostPopularList = () => {
  const mostPopularDatas = [
    {
      key: "0",
      image_url: mostPopularImg1,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "1",
      image_url: mostPopularImg2,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "2",
      image_url: mostPopularImg3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "3",
      image_url: mostPopularImg3,
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  return (
    <div className="op">
      <img src={halfSquare2} className="half-square-2-m" alt="halfSquare2" />
      <h1>Most Popular</h1>
      {mostPopularDatas.map((mostPopularData) => (
        <MostPopularItem key={mostPopularData.key} {...mostPopularData} />
      ))}
    </div>
  );
};

export default MostPopularList;
