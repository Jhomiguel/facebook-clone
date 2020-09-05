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
      <Post
        username="Jhon"
        message="this is a message"
        timestamp="this is a timestamp"
        img="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg"
        profilePic="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg"
      />
      <Post
        username="Jhon"
        message="this is a message"
        timestamp="this is a timestamp"
        profilePic="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
