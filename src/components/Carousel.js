import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div>
                <img src={this.props.source} alt="Fashion" style={{width:"400px", height:"150px"}}></img>
            </div>
        )
    }
}
