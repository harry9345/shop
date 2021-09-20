import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkUserAdmin } from "../../utils/Utils";
import "./adminToolBar.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

export default function AdminToolBar(props) {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="adminToolBar">
      <ul>
        <li>
          <Link to="/admin">My Admin</Link>
        </li>
      </ul>
    </div>
  );
}
