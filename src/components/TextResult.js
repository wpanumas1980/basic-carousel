import React, { Component } from 'react'

export default class TextResult extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.result}</h1>
            </div>
        )
    }
}
