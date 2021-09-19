import React from "react";
import shopMan from "../../asset/shopMens.jpeg";
import shopWomens from "../../asset/shopWomens.jpg";
import "./style.scss";

export default function Directory(props) {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${shopWomens})` }}>
          <a href="/"> shop women</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${shopMan})` }}>
          <a href="/"> shop mens</a>
        </div>
      </div>
    </div>
  );
}
