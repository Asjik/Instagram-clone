import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user Login", email, password, user);
        handleClickLogin();
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
      <form onSubmit={handleSubmit(handleLogIn)}>
        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            onChange: (e) => {
              setEmail(e.target.value);
            },
            // pattern:
            //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && <p>Please check the Email</p>}
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: true,
            maxLength: 10,
            onChange: (e) => {
              setPassword(e.target.value);
            },
            // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
          })}
        />

        {errors.password && <p>Please check the Password</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LogIn;
