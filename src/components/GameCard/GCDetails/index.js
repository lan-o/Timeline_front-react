import React from "react";
import "./GCDetails.scss";

function GCDetails(props) {
  return (
    <div className="gc-details">
      <div className="col left">
        <div className="platform-logo">
          <img src="" alt=""></img>
        </div>
      </div>
      <div className="col right">
        <h3 className="title">{props.title}</h3>
        <p className="genre">{props.genre}</p>
      </div>
    </div>
  );
}

export default GCDetails;
