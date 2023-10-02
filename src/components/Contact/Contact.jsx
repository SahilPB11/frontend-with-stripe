import React from "react";
import "./Contact.scss";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Enter Your e-mail.." />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <GoogleIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Contact;
