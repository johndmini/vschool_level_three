import React from 'react'

export default function Badge(props) {
    const {firstname, lastname, email, birthplace, phone, food, aboutme} = props
    return(
        <React.Fragment>
                <h2>Badge:</h2>
                <h3 className="badge-name">Name: <span>{firstname} {lastname}</span></h3>
                <h3 className="badge-phone">Phone: <span>{phone}</span></h3>
                <h3 className="badge-birthplace">Place Of Birth: <span>{birthplace}</span></h3>
                <h3 className="badge-food">Favorite food: <span>{food}</span></h3>
                <h3 className="badge-email">Email: <span>{email}</span></h3>
                <h3 className="badge-aboutme">About Me: <span>{aboutme}</span></h3>
        </React.Fragment>
    )
}