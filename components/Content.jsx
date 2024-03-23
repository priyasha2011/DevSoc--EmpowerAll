import React from "react";
import head from "../assets/2nd.png";
import { Link } from "react-router-dom";
import earth from "../assets/earth.png";
import "./content.css";

const Content = () => {
  return (
    <div className="content">
      <div>
        <span className="content-head">Help Someone in Need</span>
      </div>
      <div className="content-para">
        Ever walk by something that needs a hand in your
        <br /> community? Maybe a broken bench or a family struggling.
        <br /> We all want to help, but it's not always easy to know how.
        <br />
        <br /> This site is your chance to connect. Share what you see,
        <br /> and we'll link you with amazing local groups ready to
        <br /> jump in. Together, let's make a difference, right here at
        <br /> home.
      </div>
      <div>
        <img src={earth} className="content-img" alt="Earth" />
      </div>
      <div className="buttons-content">
        <button type="button" className="content-button"><a href="/report" className="nakli">Report an Incident</a></button>
        <button type="button" className="content-button">
          Donate Something
        </button>
      </div>
    </div>
  );
};

export default Content;
