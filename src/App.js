import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
