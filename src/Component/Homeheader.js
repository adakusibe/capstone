import React from "react";
import css from "../Styles/Homeheader.css";
import logo from "../Images/jumia logo.ico";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="logo">
        <img alt='' src={logo} style={{ width: '40px', display: 'flex', height: '30px', borderRadius: '10px' }}/>
      </div>
      <form className="search-form" style={{ justifyContent: "center"}}>
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
      <nav className="nav-links">
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default HomeHeader;
