import React from "react";
import "./RightSidebar.css";
import Dropdown from '../Dropdown/Dropdown';

const RightSidebar = () => {
  return (
    <div className="scroll-container">
      <p className="p1">GET STARTED</p>
     <Dropdown />
    <p className="p2">Tutorial : Tic-Tac-Teo</p>
    <button className="button-item">
        Thinking in React
    </button>
    <p className="p3">Installation</p>
    <hr className="hr1" />
     <p className="p1">Learn react </p>
    <p className="p3">Describing the UI</p>
    <p className="p3">Adding Interactivity</p>
    <p className="p3">Managing State</p>
    <p className="p3">Escape Hatches</p>
    </div>
  );
};

export default RightSidebar;
