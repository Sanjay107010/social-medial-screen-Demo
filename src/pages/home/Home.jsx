import React from "react";
import TopBar from "../../components/topbar/TopBar";
import Saidbar from "../../components/saidbar/Saidbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "../../pages/home/home.css";
const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Saidbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
