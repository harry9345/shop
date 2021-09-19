import React from "react";
import "./header.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

import logo from "../../asset/icon.png";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="callToAction">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My account</Link>
                <i className="fas fa-sign-out-alt"></i>
              </li>
              <li>
                <span
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  LogOut
                </span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
                <i className="fas fa-user-circle"></i>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
