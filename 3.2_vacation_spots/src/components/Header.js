import React from 'react';
import Nav from './Nav'

export default function Header() {
    return (
        <div className="vacation-header">
            <Nav />
            <div>
                <h1 className="vacation-title">Your Yearly Destination</h1>
            </div>
        </div>
    )
}