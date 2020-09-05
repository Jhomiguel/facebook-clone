import React from "react";
import "./story.css";
import { Avatar } from "@material-ui/core";

function Story({ imgSrc, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${imgSrc})` }} className="story">
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
