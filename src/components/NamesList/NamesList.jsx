import React from 'react';


const NamesList = (props) => {
    console.log(props.names)
    return ( 
        <ul>
        {props.names.map(name => {
            console.log(name)
            return <li key={props.names.indexOf(name)}>{name}</li>
        })}
        </ul>
     );
}
 
export default NamesList;