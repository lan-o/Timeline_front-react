import React from "react";

import "./GameCard.scss";

function GameCard(props) {
  const mouseEnterHandler = (e) =>
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
        onMouseEnter={mouseEnterHandler}
        onMouseOut={mouseOutHandler}
      >
        {props.children}
      </div>
    </div>
  );
}

export default GameCard;
