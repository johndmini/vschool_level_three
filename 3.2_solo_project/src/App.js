import React from 'react';
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'

export default function App() {
    const journal = data.map(location => 
        <Card 
            key={location.id}
            {...location}
        />
    )
    return (
        <div>
            <Nav />
            <div className="travel-entry">
                {journal}
            </div>
        </div>
    )
}