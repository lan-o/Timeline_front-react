import React from "react";
import './GCBackground.scss';

function GCBackground(props) {
  return (
    <div className="gc-background" style={{ backgroundImage: `url(${props.imageUrl})` }}>
    </div>
  );
}

export default GCBackground;
