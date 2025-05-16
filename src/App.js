import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import Main from "./components/Main";

const App = () => {
 

  return (
    <>
      <BrowserRouter>
<Main />
      </BrowserRouter>
    </>
  );
};

export default App;
