import React from "react";
import './GCDPlatformIcon.scss';

import originIcon from "./game-platforms-icons/icon-origin.png";
import steamIcon from "./game-platforms-icons/icon-steam.png";
import uplayIcon from "./game-platforms-icons/icon-uplay.png";


function GCDPlatformIcon(props) {
  let iconImage = "";
  let platform = props.platform;
  switch(platform){
    case "origin": 
      iconImage = originIcon;
      break;
    case "uplay": 
      iconImage = uplayIcon;
      break;
    default: 
    case "steam":
      iconImage = steamIcon;
      platform = "steam";
      break;
  }

  return (
   <img src={iconImage} alt={props.platform}></img>
  );
}

export default GCDPlatformIcon;
