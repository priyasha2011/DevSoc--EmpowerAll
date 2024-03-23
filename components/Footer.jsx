import React from 'react'
import "./Footer.css";
import "bootstrap";
import logo from "../assets/Group 21.png";

const Footer = () => {
  return (
    <div>
      <div className="footerLogin">
        <div className="footerImgContainer">
          <img src={logo} className="footerImg" />
        </div>
        <div className="toolsContainer">
          <h2>Tools</h2>
          <ul>
            <li>Home</li>
            <li>Report</li>
            <li>Get Help</li>
            <li>Contct Us</li>
            <li>Log In</li>
          </ul>
        </div>
        <div className="contactContainer">
          <h2>Contact Us</h2>
          <ul>
            <li>Vellore Institute of Technology,<br/>
            Gorbachev Road, <br/>
            Vellore - 632014,<br/>
            Tamil Nadu - India</li>
            <li>gianhaiaap@devsoc.in</li>
            <li>+91 98181 87204</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
