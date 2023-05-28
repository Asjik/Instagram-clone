import React, { useState } from "react";
import "./LogIn.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password);
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
