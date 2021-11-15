import React, { Component } from 'react';
import AlterUser from './AlertUser/AlertUser';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
        }
    }

    alertUserBtn = () => {
        alert('devCodeCamp')
    }


    render(){
        return (
            <div>
                <h1>Component Exercises</h1>
              {/*  <DisplayName firstName = {this.state.firstName} lastName={this.state.lastName}/>  */}
              {/*  <NamesList names={this.state.names}/> */}
              {/* <AlertUser alertUser={this.alertUserBtn} /> */}
              <SuperheroTable superheroes={this.state.superheroes}/>
            </div>
        )
    }
}

export default App;