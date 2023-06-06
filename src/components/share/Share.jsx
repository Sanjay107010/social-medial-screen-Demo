import React from "react";
import "../../components/share/share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import imgprofile from "../../assets/person/2.jpeg";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Share = () => {
  return (
    <div className="share ">
      <div className="sharewrap">
        <div className="sharetop">
          <img className="shareprofileimgaes" src={imgprofile} alt="" />
          <input
            type="text"
            placeholder="what's in your mind name hear ? "
            className="shareinput"
          />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shareoptions">
            <div className="shareoption">
              <PermMediaIcon htmlColor="tomato" className="shareicon" />
              <span className="shareoptiontext">photos or videos</span>
            </div>
            <div className="shareoption">
              <LabelIcon htmlColor="blue" className="shareicon" />
              <span className="shareoptiontext">tag</span>
            </div>
            <div className="shareoption">
              <LocationOnIcon htmlColor="green" className="shareicon" />
              <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
              <SentimentSatisfiedAltIcon
                htmlColor="#ff9100"
                className="shareicon"
              />
              <span className="shareoptiontext">Feelings</span>
            </div>
            <button className="sharebutton">share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
