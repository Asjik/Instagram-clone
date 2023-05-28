import React from "react";
import "./HomePage.css";
import SideNav from "../Navigation/SideNav";
import Timeline from "../Timeline/Timeline";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <SideNav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default HomePage;
