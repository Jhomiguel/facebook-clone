import React from "react";
import "./postSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "../../../context/StateContext";
import db from "../../../firebase/firebaseConfig";
import firebase from "firebase";

function PostSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imgurl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgurl,
    });
    setInput("");
    setImgUrl("");
  };
  return (
    <div className="postSender">
      <div className="postSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Make a post ${user.displayName}`}
            className="postSender__input"
          />
          <input
            type="text"
            value={imgurl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="img url (optional)"
          />
          <button
            className="postSender__button"
            onClick={handleSubmit}
            type="submit"
          >
            Hidden button
          </button>
        </form>
      </div>
      <div className="postSender__bottom">
        <div className="postSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Video Live</h3>
        </div>
        <div className="postSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
      </div>
    </div>
  );
}

export default PostSender;
