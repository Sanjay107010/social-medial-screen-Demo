import React from "react";
import "../../components/topbar/topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import imgprofile from "../../assets/person/2.jpeg";

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topnarLeft">
        <span className="logo">logo</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="search for post and friends"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarlink">Home page</span>
          <span className="topbarlink">timline page</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <PersonIcon />
            <span className="topbariconbage">1</span>
          </div>
          <div className="topbariconitem">
            <ChatIcon />
            <span className="topbariconbage">3</span>
          </div>
          <div className="topbariconitem">
            <NotificationsIcon />
            <span className="topbariconbage">1</span>
          </div>
        </div>
        <img src={imgprofile} alt="prfilep" className="topbarImg" />
      </div>
    </div>
  );
};

export default TopBar;
