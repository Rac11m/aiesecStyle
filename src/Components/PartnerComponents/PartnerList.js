import PartnerItem from "./PartnerItem";
import gPartner1 from "../../Images/partnerImages/gPartner1.svg";
import gPartner2 from "../../Images/partnerImages/gPartner2.svg";
import gPartner3 from "../../Images/partnerImages/gPartner3.svg";
import gPartner4 from "../../Images/partnerImages/gPartner4.svg";
import rPartner1 from "../../Images/partnerImages/rPartner1.svg";
import rPartner2 from "../../Images/partnerImages/rPartner2.svg";
import rPartner3 from "../../Images/partnerImages/rPartner3.svg";
import rPartner4 from "../../Images/partnerImages/rPartner4.svg";
import "./PartnerStyle.css";

const PartnerList = () => {
  const partnerDatas = [
    {
      key: 0,
      partnerTitle: "Global",
      title: "title01",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id eros luctus, tempus sapien in, volutpat risus. Nam pharetra in est tincidunt semper. Curabitur sit amet ipsum lacus. Duis ornare dui non est lobortis tempus at ac leo. In hac habitasse platea dictumst. Curabitur tincidunt nunc risus, ac semper ligula",
      imgOne: gPartner1,
      imgTwo: gPartner2,
      imgThree: gPartner3,
      imgFour: gPartner4
    },
    {
      key: 1,
      partnerTitle: "Regional",
      title: "title02",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id eros luctus, tempus sapien in, volutpat risus. Nam pharetra in est tincidunt semper. Curabitur sit amet ipsum lacus. Duis ornare dui non est lobortis tempus at ac leo. In hac habitasse platea dictumst. Curabitur tincidunt nunc risus, ac semper ligula",
      imgOne: rPartner1,
      imgTwo: rPartner2,
      imgThree: rPartner3,
      imgFour: rPartner4
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center",  }}>
        Our Partners
      </h1>
      {partnerDatas.map((partnerData) => (
        <PartnerItem
          key={partnerData.key}
          condition={partnerData.key % 2 === 0 ? true : false}
          {...partnerData}
        />
      ))}
    </div>
  );
};
export default PartnerList;
