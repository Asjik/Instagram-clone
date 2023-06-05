import React, { useState } from "react";
import "./SignUp.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigateSignup = useNavigate();
  const handleClickSignup = () => navigateSignup("/");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = () => {
    //event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: userName,
          })
            .then(() => {
              console.log("Profile updated");
            })
            .catch((error) => {
              console.log(error, "Error while updating profile!");
            })
        );
        handleClickSignup();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram logo"
      ></img>
      <form onSubmit={handleSubmit(handleSignUp)}>
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
        ></input>
        {errors.email && <p>Please check the Email</p>}
        <input
          placeholder="User name"
          type="text"
          {...register("name", {
            required: true,
            maxLength: 10,
            onChange: (e) => {
              setUserName(e.target.value);
            },
          })}
        ></input>
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
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
