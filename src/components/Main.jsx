import React from "react";
import restaurant_img from "../assets/restauranfood.jpg";

const Main = () => {
  return (
    <div>
      <div>
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p>
          We are family owned Mediterranean restaurant,focused on traditional
          recipes served with a modern twist
        </p>
        <button>Reserve a Table</button>
      </div>
      <div>
        <img src={restaurant_img} alt="" />
      </div>
    </div>
  );
};

export default Main;
