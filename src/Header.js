import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <p className="header-content">
          <img src="/myimage2.jpeg" alt="TCS Logo" />
          <h1>Project Management</h1>
          <img className="tata" src="/tatalogo.jpeg" alt="Tata Logo" />
        </p>
      </header>
    </>
  );
};

export default Header;