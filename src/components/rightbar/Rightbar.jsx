import React from "react";
import "../../components/rightbar/rightbar.css";
import birthday1 from "../../assets/gift.png";
import adrightbar from "../../assets/ad.png";
import rightbarpro from "../../assets/person/3.jpeg";
import Online from "../online/Online";
import { Users } from "../../dummyData";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarwrap">
        <div className="birthdaycontainer">
          <img className="birthdayimg" src={birthday1} alt="" />
          <span className="birthdaytext">
            <b>frd name</b> <b> 3 other friends </b>birthday today
          </span>
        </div>
        <img className="rightbarAd" src={adrightbar} alt="" />
        <h4 className="rightbartitle">Online friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
