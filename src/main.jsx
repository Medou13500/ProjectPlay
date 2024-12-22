import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Frontend/App.jsx"; // Import de App depuis Frontend
import "./index.css"; // Import de index.css depuis src

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
