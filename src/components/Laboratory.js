import React from "react";
import egg from "../images/ingredients/crystalegg.png";
import bat from "../images/ingredients/bat.png";
import berry from "../images/ingredients/chokeberry.png";
import cinnamon from "../images/ingredients/cinnamon.png";
import luna from "../images/ingredients/luna.png";
import nettle from "../images/ingredients/nettle.png";
import newt from "../images/ingredients/newt.png";
import ogre from "../images/ingredients/ogre.png";
import ivy from "../images/ingredients/poisonivy.png";
import sage from "../images/ingredients/sage.png";

function Laboratory() {
  return (
    <div className="lab-container">
      <h1>Laboratory</h1>
      <div className="ingredients-container">
        <div className="item-container">
          <img src={egg} alt="crystal egg" className="item" />
          <h4 className="desc">Crystal Egg</h4>
        </div>
        <div className="item-container">
          <img src={cinnamon} alt="cinnamon" className="item" />
          <h4 className="desc">Cinnamon</h4>
        </div>
        <div className="item-container">
          <img src={bat} alt="bat" className="item" />
          <h4 className="desc">Bat</h4>
        </div>
        <div className="item-container">
          <img src={ogre} alt="ogre" className="item" />
          <h4 className="desc">Ogre Tears</h4>
        </div>
        <div className="item-container">
          <img src={nettle} alt="nettle" className="item" />
          <h4 className="desc">Horse Nettle</h4>
        </div>
        <div className="item-container">
          <img src={newt} alt="newt" className="item" />
          <h4 className="desc">Newt</h4>
        </div>
        <div className="item-container">
          <img src={luna} alt="luna" className="item" />
          <h4 className="desc">Luna Moth</h4>
        </div>
        <div className="item-container">
          <img src={ivy} alt="ivy" className="item" />
          <h4 className="desc">Poison Ivy</h4>
        </div>
        <div className="item-container">
          <img src={sage} alt="sage" className="item" />
          <h4 className="desc">Sage</h4>
        </div>
        <div className="item-container">
          <img src={berry} alt="berry" className="item" />
          <h4 className="desc">Snow Berries</h4>
        </div>
      </div>
      <div className="cauldron-container"></div>
    </div>
  );
}

export default Laboratory;
