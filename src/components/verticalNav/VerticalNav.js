import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../userProfile/UserProfile";
import "./verticalNav.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const VerticalNav = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configUserProfile = {
    currentUser,
  };

  return (
    <div className="verticalNav">
      <UserProfile {...configUserProfile} />

      <div className="menu">{children}</div>
    </div>
  );
};

export default VerticalNav;