import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkUserAdmin } from "../utils/Utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const UseAdminAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!checkUserAdmin(currentUser)) {
      history.push("/login");
    }
  }, [currentUser]);
  return currentUser;
};

export default UseAdminAuth;
