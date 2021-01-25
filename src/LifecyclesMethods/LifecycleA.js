import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'sam'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecycleA Render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}> Change State </button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
