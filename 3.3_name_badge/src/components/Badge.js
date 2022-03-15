import React from 'react'

export default function Badge(props) {
    return(
        <React.Fragment>
            <form className="badge">
                <h2>Badge:</h2>
                <h3 className="badge-name">Name:{props.firstname} {props.lastname}</h3>
                <h3 className="badge-phone">Phone:{props.phone}</h3>
                <h3 className="badge-birthplace">Place Of Birth: {props.birthplace}</h3>
                <h3 className="badge-food">Favorite food: {props.food}</h3>
                <h3 className="badge-email">Email: {props.email}</h3>
                <h4 className="badge-aboutme">{props.aboutme}</h4>
            </form>
        </React.Fragment>
    )
}