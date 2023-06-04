import React, { useState, useEffect, useMemo } from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { logoutUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
    signOut(auth);
    handleClickLogout();
  };
  //nawigacja
  const navigateHome = useNavigate();
  const handleClickHome = () => navigateHome("/");
  const navigateExplore = useNavigate();
  const handleClickExplore = () => navigateExplore("/Explore");
  const navigateLogout = useNavigate();
  const handleClickLogout = () => navigateLogout("/LogIn");

  const breakpoint = 1159;

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // Memoize
  const memoizedImageSrc = useMemo(() => {
    let srcImage = "";
    if (windowSize.innerWidth > breakpoint) {
      srcImage =
        "https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png";
    } else {
      srcImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622";
    }
    return srcImage;
  }, [windowSize.innerWidth]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src={memoizedImageSrc}
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <button onClick={handleClickHome} className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button onClick={handleClickExplore} className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notification</span>
        </button>

        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>

        <span className="sidenav__button">
          <Avatar>
            {/* {user.userName ? user.userName.charAt(0).toUpperCase() : "A"} */}
          </Avatar>
          <span>
            {user ? user.userName : "user name"}
            <button onClick={handleLogOut} className="logout__button">
              Log out
            </button>
          </span>
        </span>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
