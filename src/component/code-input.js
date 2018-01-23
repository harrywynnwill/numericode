import React, { Component } from 'react';

class CodeInput extends Component {

    render() {
        return (
            <div className="code-input">
                <form onSubmit={this.props.onSubmit}>
                    <h1> Please enter the encoded message:</h1>
                    <input type="text" value={this.props.value} onChange={this.props.onChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    };
}

export default CodeInput