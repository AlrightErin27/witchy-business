import React from "react";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";

function SpellBook() {
  const history = useHistory();
  function handleClick() {
    history.push("/Laboratory");
  }
  return (
    <div className="spell-book-container">
      <h1> SpellBook </h1>
      <Router>
        <NavLink to="/Laboratory">
          <button className="button" onClick={handleClick}>
            To Laboratory
          </button>
        </NavLink>
      </Router>
    </div>
  );
}

export default SpellBook;
