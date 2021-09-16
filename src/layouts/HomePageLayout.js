import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout(props) {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
}
