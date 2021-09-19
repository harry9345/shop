import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout(props) {
  return (
    <div>
      <Header {...props} />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
}
