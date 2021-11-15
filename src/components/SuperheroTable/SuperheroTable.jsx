import React from 'react';


const SuperheroTable = (props) => {
    console.log(props.superheroes)
    return ( 
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
                {props.superheroes.map(hero => {
                    return <tr>
                    <td> {hero.name} </td>
                    <td> {hero.primaryAbility}</td>
                    <td> {hero.secondarAbility} </td>
                    </tr>
                })}
            </table>
        </div>
     );
}
 
export default SuperheroTable;