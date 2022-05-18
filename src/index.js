import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Welcome from "./components/Welcome";
import Laboratory from "./components/Laboratory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Router>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/laboratory" component={Laboratory} />
    </Router>
  </>
);
