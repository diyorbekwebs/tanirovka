import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App.jsx";
import "./index.css";
import "./i18.js"
import "swiper/css";
import "swiper/css/parallax";
import { BrowserRouter } from "react-router-dom";
import ScrollToHashElement from "./scrollhash.js";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToHashElement />
    <App />
  </BrowserRouter>
);
