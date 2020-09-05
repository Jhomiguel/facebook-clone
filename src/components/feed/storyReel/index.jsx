import React from "react";
import "./storyReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        imgSrc="https://www.regalosdeempresasequio.com/blog/wp-content/uploads/2017/06/branding.jpg"
        profileSrc="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg"
        title="story1"
      />
      <Story
        imgSrc="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg"
        title="story2"
      />
    </div>
  );
}

export default StoryReel;
