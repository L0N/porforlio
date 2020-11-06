import React, { Component } from 'react';

class books extends Component {
    render() {
        console.log("Books component ran")
        return (
            <div className="book-list">
                <div className="book-title"> Title: { this.props.title }  </div>
                <div className="book-author"> Author: { this.props.author }  </div>
            </div>
        );
    }
}

export default books;