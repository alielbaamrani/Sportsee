import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

console.log('NODE_ENV: ', process.env.NODE_ENV)
console.log('REACT_APP_ENVIRONMENT: ', process.env.REACT_APP_ENVIRONMENT)
