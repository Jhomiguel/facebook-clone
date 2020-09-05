import React from "react";
import "./widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJhomiguelFlorianMendez%2F&tabs=timeline&width=350&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="350"
        height="1500"
        style={{ border: "none;", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="myfeed"
      ></iframe>
    </div>
  );
}

export default Widgets;
