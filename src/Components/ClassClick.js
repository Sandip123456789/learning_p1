import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked again Click Again button.");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Again</button>
            </div>
        )
    }
}

export default ClassClick

/*
Event Handling
Handling the event in class component
*/
