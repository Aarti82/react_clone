import React from "react";
import "./Main.css";
import logo from "../../assets/logo.jpg";

const Main = ({ children }) => {
return (
        
    <div className="main">
        <div>
        <h3 className="h3">Have a look at the result:</h3>
        <div className="img">
            <img className="img" src={logo} alt="" />
            </div>
            </div>
        <div className="content">
            <p className="p7">Welcome to app</p>
            <button className="button">Click</button>

        </div>
       <div className="page-section">
        {children}
      </div>
    </div>
    
)

}
export default Main;