import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image" alt=""/>
            <h3> {props.place} <span className="graytalized">Starting at {props.price}</span> </h3>
            <h3>Best time to go is <span className="graytalized">{props.timeToGo}</span></h3>
        </div>
    )
}