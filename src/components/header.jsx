import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log("Header component ran")
        return (
            <div>
                <h1 className="portfolio-title">Frank Manue Jr</h1>
                <h2>Web Developer, System Admin & Media Enthusiast</h2>
            </div>
        );
    }
}

export default Header;