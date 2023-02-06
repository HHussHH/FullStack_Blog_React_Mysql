import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const links = [
  { text: "ART", link: "/?cat=art" },
  { text: "SCIENCE", link: "/?cat=csience" },
  { text: "TECHNOLOGY", link: "/?cat=technology" },
  { text: "CINEMA", link: "/?cat=cinema" },
  { text: "DESIGN", link: "/?cat=desing" },
  { text: "FOOD", link: "/?cat=food" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          {links.map((link, id) => {
            return (
              <Link className="link" to={link.link} key={id}>
                <h6>{link.text}</h6>
              </Link>
            );
          })}
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
