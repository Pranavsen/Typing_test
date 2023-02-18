import React from "react";
import Navbar from "./Navbar";
import "../Css/Home.css";
import Body from "./Body";
function Home() {
  return (
    <div className="home">
      <div className="home_navbar">
        <Navbar />
      </div>
      <hr />
      <div className="home_body">
        <Body />
      </div>
    </div>
  );
}

export default Home;
