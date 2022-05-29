import React from "react";

function SpellForm() {
  function handleSubmit() {
    console.log("handle submit");
  }
  function handleTitle(e) {
    console.log(e.target.value, "(title)");
  }
  function handleDesc(e) {
    console.log(e.target.value, "(desc)");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="item-f" id="spell-title-f">
          <label>Spell Title</label>
          <>
            <input type="text" onChange={handleTitle} />
          </>
        </div>
        <div className="item-f">
          <label>Spell Description</label>
          <input type="text" onChange={handleDesc} id="f-desc" />
        </div>
        <div className="item-f">
          <input type="submit" className="form-submit" id="f-submit" />
        </div>
      </form>
    </div>
  );
}

export default SpellForm;
