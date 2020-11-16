import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.changeState}>{this.props.btnContent}</button>
            </div>
        )
    }
}
