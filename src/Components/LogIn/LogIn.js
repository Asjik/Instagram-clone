import React, { useState } from "react";
import "./LogIn.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateLogin = useNavigate();
  const handleClickLogin = () => navigateLogin("/");

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleClickLogin();
        console.log("user Login", user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram logo"
      ></img>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      ></input>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  );
}

export default LogIn;
