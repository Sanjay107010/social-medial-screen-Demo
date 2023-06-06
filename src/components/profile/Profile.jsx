import React, { useState } from "react";
import "../../components/profile/profile.css";
import TopBar from "../../components/topbar/TopBar";
import Saidbar from "../../components/saidbar/Saidbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import procover from "../../assets/post/3.jpeg";
import propersoneimg from "../../assets/person/7.jpeg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Avatar from "react-avatar-edit";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [imgCrop, setImgCrop] = useState(false);
  const [storeImg, setStoreImg] = useState([]);

  const onCrop = (view) => {
    setImgCrop(view);
  };
  const onClose = () => {
    setImgCrop(null);
  };
  const save = () => {
    setStoreImg([...storeImg, { imgCrop }]);

    // const tempImage = [...imgCrop, ...storeImg];
    // console.log(
    //   "curent find",
    //   tempImage.find((item) => item.imgCrop === imgCrop)
    // );
    setShow(false);
  };
  localStorage.setItem("imagespro", JSON.stringify(storeImg));

  // const profileImageshown = storeImg.map((item) => item.imgCrop);
  const profileImageshown = imgCrop;
  // console.log("profileImageshown", profileImageshown);

  // console.log("imgaes", profileImageshown);
  console.log("crop img", imgCrop);
  console.log("store img", storeImg);

  const localimg = JSON.parse(localStorage.getItem("imagespro"));
  console.log("imge local get", localimg);
  const propfilename = (item) => {
    // alert("jkjk");
    console.log("click hear", item);
    console.log("click store local data", localimg);
    // if(item===img.iid)
  };

  return (
    <>
      <TopBar />
      <div>
        {localimg.map((item) => (
          <img src={item.imgCrop} alt="hklhkl" />
        ))}
      </div>

      {/* dialo Box start */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile photos </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ justifyContent: "center" }}>
          <Avatar
            width={390}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
            // onBeforeFileLoad={this.onBeforeFileLoad}
            // src={this.state.src}
          />
          {/* <img src={this.state.preview} alt="Preview" /> */}
        </Modal.Body>
        <Modal.Footer>
          <div className="profileimg">
            <div className="rightimgespro">
              {storeImg.map((item, index) => (
                // console.log("item nee map", item);
                <img
                  key={index}
                  height={"30%"}
                  width={"30%"}
                  src={item.imgCrop}
                  alt="rrr"
                  onClick={() => {
                    propfilename(item.imgCrop);
                  }}
                />
              ))}
              {/* <img
                
                src={imgCrop}
                alt="images profile"
              /> */}
            </div>
            <div className="leftButtonshow">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={save}>
                Save
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      {/* dilog box end */}
      <div className="profile">
        <Saidbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={procover} alt="" />
              <img
                className="profileUserImg"
                src={
                  profileImageshown.length ? profileImageshown : propersoneimg
                }
                alt="ffff"
                onClick={handleShow}
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
