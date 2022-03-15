import React from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero'
import HeroText from './components/Herotext';
import Card from './components/Card'
import data from './data'
import "./index.css"

export default function App() {
    const cards = data.map(item =>{
        return (
            <Card 
            key={item.id}
            {...item}
            />
        )
    })
    return (
        <div>
            <Nav />
            <Hero />
            <HeroText />
            <div className="card-container">
                {cards}
            </div>
        </div>
    )
}