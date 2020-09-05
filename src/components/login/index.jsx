import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebaseConfig";
import { useStateValue } from "../../context/StateContext";
import { actionTypes } from "../../context/StateReducer";
function Login() {
  const [_, dispatch] = useStateValue();
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          payload: result.user,
        });
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png"
          alt="facebook Logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook wine logo"
        />
      </div>
      <Button type="submit" onClick={SignIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
