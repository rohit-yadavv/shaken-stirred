import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/HomeContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </AppProvider>
);
