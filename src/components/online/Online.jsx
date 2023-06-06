import React from "react";
import "../../components/online/online.css";

const Online = (props) => {
  console.log("user data all", props);
  console.log("user data all user", props.user.profilePicture);
  return (
    <li className="righbarfriens">
      <div className="rightbarprofileimgcontainer">
        <img
          className="rightbarprofileimg"
          src={props.user.profilePicture}
          alt=""
        />
        <span className="ribaronline"></span>
      </div>
      <span className="righbarusername">{props.user.username}</span>
    </li>
  );
};

export default Online;
