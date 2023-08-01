import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FovoriteContextProvider } from "./store/FavoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FovoriteContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FovoriteContextProvider>
);
