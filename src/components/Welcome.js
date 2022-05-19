import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";
import door from "../images/door.png";
import open_door from "../images/door.gif";

function Welcome() {
  //STATE
  const history = useHistory();
  const [knocks, setKnocks] = useState(1);

  //Sets knocks state depending on how many times door is clicked
  function handleKnocks() {
    if (knocks < 3) {
      setKnocks(knocks + 1);
    } else {
      setKnocks(1);
      console.log("🚪", "enter...", `Knocks: ${knocks}`);
      history.push("/Laboratory");
    }
  }
  console.log("KNOCKS", knocks);
  return (
    <div id="welcome_pg">
      <div id="welcome_txt">
        <h1>Witches Welcome</h1>
        <p>
          No matter if you are a good witch or a bad witch, we beckon thee to
          save a pinch of time.
        </p>
        <p>
          Our sisterhood is converting the tried & true rituals of Dark Ages
          into this Digital Age.
        </p>
        <p>
          Let our coven do the alchemy for you, <br />
          conveniently turning the metals of antiquity to gild the world wide
          webbing of today.
        </p>
        <div id="entry-container">
          <p>Knock thrice to enter . . .</p>
          <div id="door-container" onClick={handleKnocks}>
            {/* ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ */}
            {knocks === 1 ? (
              <img src={door} alt="door" className="door" />
            ) : knocks === 2 ? (
              <Router>
                <NavLink to="/Laboratory">
                  <img src={open_door} alt="open-door" className="door" />
                </NavLink>
              </Router>
            ) : (
              <img src={open_door} alt="open-door" className="door" />
            )}
            {/* ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ ✊ */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
