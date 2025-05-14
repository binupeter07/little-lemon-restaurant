import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/">About</a>
          </li>
          <li>
            {" "}
            <a href="/">Menu</a>
          </li>
          <li>
            {" "}
            <a href="/">Order Online</a>
          </li>
          <li>
            {" "}
            <a href="/">Reservations</a>
          </li>
          <li>
            {" "}
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>
            <p>Little Lemon Restaurant,
              Dublin
            </p>
          </li>
          <li>
            <p>+91 7034134988</p>
          </li>
          <li>
            <p>littlelemonrestuarant@gmail.com</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
