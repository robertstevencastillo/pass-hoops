import React, { useEffect, useRef } from "react";
import "./IntroJumbotron.css";
import JumbotronText from "./JumbotronText/JumbotronText";
require("dotenv").config();

function IntroJumbotron(props) {
  const jumbotronTextContainerRef = useRef(null);
  const jumbotronVideoRef = useRef(null);

  useEffect(() => {
    let animationCounters = 0;

    jumbotronTextContainerRef.current.style.display = "none";
    jumbotronVideoRef.current.style.display = "none";

    addJumbotronTextAnimationClasses(jumbotronTextContainerRef.current);

    jumbotronTextContainerRef.current.addEventListener("animationend", () => {
      if (animationCounters === jumbotronTextContainerRef.current.children.length - 1) {
        jumbotronVideoRef.current.classList.add("animate__animated", "animate__fadeIn");
        jumbotronVideoRef.current.style.display = "block";
      } else {
        animationCounters += 1;
      }
    });
  }, []);

  function addJumbotronTextAnimationClasses(element) {
    jumbotronTextContainerRef.current.style.display = "block";
    for (let x = 0; x < element.children.length; x++) {
      element.children[x].classList.add("animate__animated", "animate__fadeInLeft", `animate__delay-${x}s`);
    }
  }

  return (
    <header>
      <div className="overlay"></div>
      <video ref={jumbotronVideoRef} className="intro-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src={process.env.PUBLIC_URL + "/videos/pass_vid_one.mov"} type="video/mp4" />
      </video>
      <div className="container h-100">
        <JumbotronText ref={jumbotronTextContainerRef} />
      </div>
    </header>
  );
}

export default IntroJumbotron;
