import React from "react";
import './background.scss';

function Background(props) {
  return (
    <div className="background">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="gradient-1" />
      <div className="gradient-2" />
      <div className="gradient-3" />
    </div>
  );
}

export default Background;
