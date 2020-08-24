import React, { forwardRef } from "react";
import "./JubmotronText.css";

function JumbotronText(props, ref) {
  return (
    <div className="jumbotron-text-container-flex-parent">
      <div className="jumbotron-text-container-flex-child" ref={ref}>
        <p className="pass-intro">P.A.S.S Basketball Training</p>
        <p className="pass-intro">Players Attaining Skill for Success</p>
        <p className="pass-intro">More Content Coming Soon...</p>
        <p className="pass-intro contact-link">Contact Us Below</p>
      </div>
    </div>
  );
}

export default forwardRef(JumbotronText);

/*
Animating React Apps
https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

https://animate.style/

*/
