import React from "react";
import "../../components/feed/feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedwraper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} posts={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
