import React from "react";
import "../../components/saidbar/saidbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkIcon from "@mui/icons-material/Work";
import friendpro1 from "../../assets/person/2.jpeg";
import { Users } from "../../dummyData";
import CloseFriends from "../closefriends/CloseFriends";

const Saidbar = () => {
  return (
    <div className="saidbar">
      <div className="saidbarwraper">
        <ul className="saidbarlist">
          <li className="saidbarlistitem">
            <RssFeedIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">Feed</span>
          </li>
          <li className="saidbarlistitem">
            <ChatIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">Chat</span>
          </li>
          <li className="saidbarlistitem">
            <VideoChatIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">Video</span>
          </li>
          <li className="saidbarlistitem">
            <GroupIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">Group</span>
          </li>
          <li className="saidbarlistitem">
            <BookmarkIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">Bookmark</span>
          </li>
          <li className="saidbarlistitem">
            <QuestionMarkIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">Question</span>
          </li>
          <li className="saidbarlistitem">
            <WorkIcon className="saidbaricon " />
            <span className="saidbarlistitemtext">work</span>
          </li>
        </ul>
        <button className="saidbarbutton">show more</button>
        <hr className="saidbarhr" />
        <ul className="saidbarfriendlist">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Saidbar;
