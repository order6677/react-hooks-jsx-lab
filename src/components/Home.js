import react from "react";
import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  
    // <div id="home">
    //   <h1 style ="text-color: firebrick">Name
    // </div>
    const styleObj = {
      color : "firebrick"
    }
    return <div id="home">Home
      <h1 style={styleObj}>{name} is a Web Developer from {city}</h1>
    </div>;
  }
  
  


export default Home;
