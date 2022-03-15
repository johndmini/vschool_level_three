import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import "./index.css";

export default function App() {
    const vacationSpots = data.map(location => 
    <Card 
    key={location.id}
    {...location}
    />
    )
    return(
        <div>
            <Header />
            <div className="vacation-selections">
                {vacationSpots}
            </div>
            
        </div>
    )
}