import React from "react";
import "./IntroJumbotron.css";
require("dotenv").config();

function IntroJumbotron(props) {
  return (
    <header>
      <div className="overlay"></div>
      <video className="intro-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src={process.env.PUBLIC_URL + "/videos/pass_vid_one.mov"} type="video/mp4" />
      </video>
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">P.A.S.S</h1>
            <p className="lead mb-0">Players Attaining Skill for Success</p>
            <p className="lead mb-0">More Content Coming Soon...</p>
            {/* //eslint-disable-next-line to the line before. */}
            <a href="#contact-form" className="lead mb-0 contact-link">
              Click Here to Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default IntroJumbotron;

// players attaining skills for success
