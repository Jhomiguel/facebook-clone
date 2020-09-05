import React, { useState, useEffect } from "react";
import "./feed.css";
import StoryReel from "./storyReel";
import PostSender from "./postSender";
import Post from "./post";
import db from "../../firebase/firebaseConfig";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <PostSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          message={post.data.message}
          timestamp={post.data.timestamp}
          img={post.data.image}
          profilePic={post.data.profilePic}
        />
      ))}
    </div>
  );
}

export default Feed;
