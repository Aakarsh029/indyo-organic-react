import React from 'react';

class Navbar extends React.Component {
    state = {}
    render() {
        return (<header className="header" style={{ backgroundColor: 'white' }}>
            <a href className="logo"><img src="/images/1.jpg " /></a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
            <ul className="menu">
                <li><a href="#work" id="atext">Home</a></li>
                <li><a href="#about" id="atext">About</a></li>
                <li><a href="#careers" id="atext">Products</a></li>
                <li><a href="#contact" id="atext">Gallery</a></li>
                <li><a href="#contact" id="atext">Projects</a></li>
                <li><a href="#contact" id="atext">Contact Us</a></li>
            </ul>
        </header>);
    }
}

export default Navbar;