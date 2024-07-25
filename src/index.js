import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./styles/tailwind.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
