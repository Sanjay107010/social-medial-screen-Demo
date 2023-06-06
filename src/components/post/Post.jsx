import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../components/post/post.css";
import imgprofile from "../../assets/person/2.jpeg";
import postimg from "../../assets/post/2.jpeg";
import postlike from "../../assets/like.png";
import postheart from "../../assets/heart.png";
import { Users } from "../../dummyData";

const Post = ({ posts }) => {
  console.log("post data", posts);
  const [like, setLike] = useState(posts.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="postwrap">
        <div className="posttop">
          <div className="posttopleft">
            <img
              className="posttopprofileimg"
              src={Users.filter((u) => u.id === posts.userId)[0].profilePicture}
              alt=""
            />

            {/* //src= {imgprofile} */}

            <span className="postusername">
              {Users.filter((u) => u.id === posts.userId)[0].username}
            </span>
            <span className="postdate">{posts.date}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{posts?.desc}</span>
          <img className="postimg" src={posts.photo} alt="imgpost" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img
              className="likeicon"
              alt=""
              src={postlike}
              onClick={likeHandler}
            />
            <img
              className="likeicon"
              alt=""
              src={postheart}
              onClick={likeHandler}
            />
            <sapn className="likecounter">{like} peopole like it</sapn>
          </div>
          <div className="postbottomright">
            <sapn className="postcomment">{posts.comment} comments</sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
