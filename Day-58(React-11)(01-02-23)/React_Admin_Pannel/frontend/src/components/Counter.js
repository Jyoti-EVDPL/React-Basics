import React, { Component } from 'react'

class counter extends Component {
    componentDidUpdate(prevprops, prevState) {
        console.log("previous number:",prevprops.number)
        console.log("this number:",this.props.number)
        if (prevprops.number !== this.props.number)
            console.log("Component Updated")
    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
export default counter;