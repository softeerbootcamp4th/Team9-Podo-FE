import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

async function enableMocking() {
  console.log("eeeee");
  if (process.env.NODE_ENV !== "development") {
    console.log("not dev");
    return;
  }

  const { worker } = await import("./mocks/browser");
  console.log("start work");
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
});

// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);
