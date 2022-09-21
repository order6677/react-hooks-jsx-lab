import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Top 7 Must-Have Browser Extensions for Designers
        Years ago, you would only see a web browser as just a piece of software on top of your operating system.
      </p>
      <img src={image} alt="I made this"></img>
      

    </div>
  )
}

export default About;
