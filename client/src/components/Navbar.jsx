import React, { useContext } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const links = [
  { text: "ART", link: "/?cat=art" },
  { text: "SCIENCE", link: "/?cat=csience" },
  { text: "TECHNOLOGY", link: "/?cat=technology" },
  { text: "CINEMA", link: "/?cat=cinema" },
  { text: "DESIGN", link: "/?cat=desing" },
  { text: "FOOD", link: "/?cat=food" },
];

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          {links.map((link, id) => {
            return (
              <Link className="link" to={link.link} key={id}>
                <h6>{link.text}</h6>
              </Link>
            );
          })}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <Link to="/login">
              <span onClick={logout}>Logout</span>
            </Link>
          ) : (
            <Link className="link" to="login">
              Login
            </Link>
          )}
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
