import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    render(){
        return (
            <div>
                <h1>Component Exercises</h1>
                <DisplayName firstName = {this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.state.names}/>
            </div>
        )
    }
}

export default App;