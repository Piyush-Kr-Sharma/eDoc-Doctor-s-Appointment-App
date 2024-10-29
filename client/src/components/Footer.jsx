import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="github">
                <a
                  href="https://github.com/Piyush-Kr-Sharma"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/piyush-kumar-08b432258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="insta">
                <a
                  href="https://www.instagram.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/dunna-avinash"
            target="_blank"
            rel="noreferrer"
          >
            PiyushSharma
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
