import React from "react";
import "./Learn.css";
const Learn = () => {
    return(
   <div className="learn">
    <h2 className="h2">Quick Start</h2>
    <p className="l1"> Welcome to the React documentation! This page will give you an introduction to 80% of the React concepts that you will use on a daily basis.</p>
    <div className="learn1">
        <ul className="ul">
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li>How to share data between components</li>
        </ul>
    </div>
   </div>
 );
};

export default Learn;
