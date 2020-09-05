import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";

function PostFeed({ username, profilePic, img, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={img} alt="post image" />
      </div>
    </div>
  );
}

export default PostFeed;
