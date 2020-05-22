import React from "react";
import classNames from "classnames";
import "./LoadingBar.scss";

const LoadingBar = (props) => {

  let loadingClasses = classNames("loading-bar", props.color, {"loading": props.loading}, {"loaded": props.loaded});

  return (
    <div className={loadingClasses}>
      <div className="background">

      </div>
      <div className="loading-progress" style={{width: `${props.percent}%`}}>
        
      </div>
    </div>
  );
};

export default LoadingBar;
