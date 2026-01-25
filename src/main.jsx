import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <HelmetProvider>                    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
    <ToastContainer />
</React.StrictMode>
);
