import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello there!"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    //     console.log(this);
    // }

    //Class property as arrow function (4th approach)
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!!'
        })
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Using Bind keyword (1st approach) */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                
                {/* Arrow function approach (2nd approach) */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* Binding in class constructor i.e, Official React doc approach (3rd approach) */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind


//Binding Event Handlers