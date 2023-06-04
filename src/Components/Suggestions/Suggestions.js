import React from "react";
import "./Suggestions.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

function Suggestions() {
  const user = useSelector((state) => state.data.user.user);
  return (
    <div className="suggestions">
      <div className="suggestions__userlogged">
        <div className="userName__left">
          <span className="suggestion__avatar">
            <Avatar></Avatar>
          </span>
          <div className="userName__info">
            <span className="userName">{user ? user.email : "User"}</span>
            <span className="info"> {user ? user.userName : "user name"}</span>
          </div>
        </div>
      </div>
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__userNames">
        <div className="suggestions__userName">
          <div className="userName__left">
            <span className="suggestion__avatar">
              <Avatar></Avatar>
            </span>
            <div className="userName__info">
              <span className="userName">user name</span>
              <span className="info"> Follow by user</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__userName">
          <div className="userName__left">
            <span className="suggestion__avatar">
              <Avatar></Avatar>
            </span>
            <div className="userName__info">
              <span className="userName">user name</span>
              <span className="info"> Follow by user</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__userName">
          <div className="userName__left">
            <span className="suggestion__avatar">
              <Avatar></Avatar>
            </span>
            <div className="userName__info">
              <span className="userName">user name</span>
              <span className="info"> Follow by user</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__userName">
          <div className="userName__left">
            <span className="suggestion__avatar">
              <Avatar></Avatar>
            </span>
            <div className="userName__info">
              <span className="userName">user name</span>
              <span className="info"> Follow by user</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
