import React from "react";
import { Link } from "react-router-dom";
import banner_img from "../assets/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="left-section">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediterranean restaurant,focused on traditional
            recipes served with a modern twist
          </p>
          <Link to="/booking">
            <button>Reserve Table</button>
          </Link>
        </div>
        <div className="right-section">
          <img src={banner_img} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
