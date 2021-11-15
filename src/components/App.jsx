import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White'
        }
    }

    render(){
        return (
            <div>
                <h1>Component Exercises</h1>
                <DisplayName firstName = {this.state.firstName} lastName={this.state.lastName}/>
            </div>
        )
    }
}

export default App;