import React, { Component } from 'react';

class MessageDisplay extends Component {

render() {
    return(
        <div className="message-display">
            <h1>Message: {this.props.message}</h1>
        </div>
    )};
}

export default MessageDisplay