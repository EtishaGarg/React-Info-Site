import React from "react"
import logo from '../images/logo512.png';

function Header() {
    return (
        <div className="navbar">
            <img src={logo} alt="React logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </div>
    )
}

export default Header;
