import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "../../redux/user/user.actions";
import "./header.scss";

import logo from "../../asset/icon.png";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

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
                <span onClick={() => signOut()}>
                  LogOut
                  <i className="fas fa-sign-out-alt"></i>
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
