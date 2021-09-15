import React from "react";
import "./style.scss";
import logo from "../../asset/icon.png";

export default function Header(props) {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
