import React from "react";
import { image } from "../data/data"; // Make sure you import the image

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a little about myself!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
