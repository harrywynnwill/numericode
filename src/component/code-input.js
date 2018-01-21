import React, { Component } from 'react';

class CodeInput extends Component {

    render() {
        return (
            <div className="code-input">
                <form onSubmit={this.props.handleSubmit}>
                    <label>Please enter the code:
                        <input type="text" value={this.props.value} onChange={this.props.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    };
}

export default CodeInput