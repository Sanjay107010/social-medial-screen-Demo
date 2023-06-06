import React from "react";
import "../../components/closefriends/colsefriends.css";

const CloseFriends = ({ user }) => {
  return (
    <li className="saidbarfriend">
      <img className="saidbarfriendimg" alt="" src={user.profilePicture} />
      <sapn className="saidbarfriendname">{user.username}</sapn>
    </li>
  );
};

export default CloseFriends;
