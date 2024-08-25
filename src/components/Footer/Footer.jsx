import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import zahid from "../../assets/zahid.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={zahid} alt="" className="logo" />
          <p>
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-let">
          <p>© 2024 Zahid Mithawala. All rights reserved</p>
        </div>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
