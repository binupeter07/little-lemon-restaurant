import React from "react";
import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="Little lemon logo" />
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a></li>
           <li> <a href="/">About</a></li>
           <li> <a href="/">Menu</a></li>
           <li> <a href="/">Order Online</a></li>
           <li> <a href="/">Reservations</a></li>
           <li> <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
