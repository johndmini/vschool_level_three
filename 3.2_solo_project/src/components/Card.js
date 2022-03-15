import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-image" alt=""/>
            <div className="card-stats">
                <h3 className="card-pindrop"><img src="./pinicon.png" className="card-path" alt=""/>{(props.location).toUpperCase()} <a href={props.googleMapsUrl}>View on Google Maps</a></h3>
                <h1 className="card-title">{props.title}</h1>
                <h5 className="card-dates">{props.startDate} - {props.endDate}</h5>
                <p className="card-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}