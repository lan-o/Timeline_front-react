import React from "react";

import "./GameCard.scss";

function GameCard(props) {
  const mouseOverHandler = (e) =>
    [].slice
      .call(e.currentTarget.children)
      .map((el) => el.classList.add("hovered"));
  const mouseOutHandler = (e) =>
    [].slice
      .call(e.currentTarget.children)
      .map((el) => el.classList.remove("hovered"));

  return (
    <div className="game-card">
      <div
        className="gc-content-container"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        {props.children}
      </div>
    </div>
  );
}

export default GameCard;
