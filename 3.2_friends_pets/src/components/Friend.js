import React from 'react';
import Pet from './Pet'

export default function Friend({name, age, pets}) {
    return (
        <div className="friendlist">
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
            <div>
                <h2>Pets:</h2>
                {pets.map(pet => <Pet key={pet.petName}{...pet} />)}
            </div>
            
        </div>
    )
}