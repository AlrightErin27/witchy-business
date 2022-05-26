import React from "react";
import crystal_egg from "../images/ingredients/crystalegg.png";

function Laboratory() {
  return (
    <div className="lab-container">
      <h1>Laboratory</h1>
      <div className="ingredients-container">
        {/* ingredients mapped here */}
        <img src={crystal_egg} alt="crystal egg" className="item" />
      </div>
      <div className="cauldron-container"></div>
    </div>
  );
}

export default Laboratory;
