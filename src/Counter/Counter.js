import React from 'react'

export default class Counter extends React.Component{
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) =>
        {
            return ({
                counter: prevState.counter +1
            })
        })
    }

    delCounter = () =>{
        this.setState((prevState) =>
        {
            return ({
                counter: prevState.counter -1
            })
        })

    }
    render(){
        return[
                <h2 key={'1'}>Counter {this.state.counter}</h2>,
                <button key={'2'} onClick={this.addCounter}>+</button>,
                <button key={'3'} onClick={this.delCounter}>-</button>
        ]
    }
}