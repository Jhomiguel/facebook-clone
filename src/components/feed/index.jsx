import React from "react";
import "./feed.css";
import StoryReel from "./storyReel";
import PostSender from "./postSender";
import Post from "./post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostSender />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
