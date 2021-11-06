import React from "react";
import "./home.css";
import {Avatar} from "@material-ui/core";
import AppsIcon from “@material-ui/icons/Apps”;

function home() {
  return (
    <div>
      <div className="home_header">
        <div className="home_headerLeft"></div>
        <div className="home_headerRight"></div>
      </div>

      <div className="home_body"></div>
    </div>
  );
}

export default home;
