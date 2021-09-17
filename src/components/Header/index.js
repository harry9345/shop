import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../asset/icon.png";
import { auth } from "../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;

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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
