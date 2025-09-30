import React from "react";
import "./Footer.css";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="move">
        <h2>
          <marquee>
            {" "}
            Join and play with us!&nbsp;&nbsp;&nbsp; Join and play with
            us!&nbsp;&nbsp;&nbsp; Join and play with us!&nbsp;&nbsp;&nbsp; Join
            and play with us!&nbsp;&nbsp;&nbsp; Join and play with
            us!&nbsp;&nbsp;&nbsp; Join and play with us!
          </marquee>
        </h2>
      </div>

      <div className="last">
        <h5>
          Sign up to our newsletter and exciting offers.
          <input placeholder="Enter your email"></input>
          <button>Subscribe</button>
        </h5>
      </div>

      <div className="vvv">
        <div className="com">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className="pol">
          <h3>Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="get">
          <h3>Get in touch</h3>
          <p>
            <FiPhone /> +91 95999 82805
          </p>
          <p>
            <TfiEmail /> Email us
          </p>
          <p>Follow us</p>
          <p>
          <a><FaInstagram style={{fontSize:20}}/></a>
          <a><FaFacebook style={{fontSize:20}}/></a>
          <a><IoLogoYoutube style={{fontSize:20}}/></a>
          <a><FaLinkedinIn style={{fontSize:20}}/></a>
          </p>
        </div>
        <div className="gif">
          <h3>Toy Gift Ideas</h3>
          <ul>
            <li>Art and Craft Kits</li>
            <li>Educational Toys</li>
            <li>Puzzles</li>
            <li>Soft Toys</li>
            <li>Slide for Kids</li>
          </ul>
        </div>
      </div>
      <div className="all">
        <p>© 2025 Webby Toys | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
