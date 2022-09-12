import React, { useState } from "react";
import "./login.sass";
import initializeAuthentication from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../../stateProvider";
import { useNavigate } from "react-router-dom";

initializeAuthentication();
const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, dispatch] = useStateValue();
  // const history = useNavigate();
  let handleGoogleSignIn = (e) => {
    e.preventDefault();
  };
  let handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });

    // history.replace('./sd')
  };
  return (
    <div className="formWrapper">
      <form action="#" className="form">
        <div className="header__logo">
          <span className="header__logo--sprite"></span>
        </div>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {console.log(user)}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="signIn"
          type="submit"
          value="Login"
          onClick={handleGoogleSignIn}
        />
        <span>OR</span>
        <label onClick={handleSignUp}>
          <img
            width="20px"
            src={
              "https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-64.png"
            }
            alt="s"
          />
          <span>Authenticate with google</span>
        </label>
      </form>
    </div>
  );
}

export default Login;
