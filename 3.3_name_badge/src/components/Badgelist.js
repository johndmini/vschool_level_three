import React from 'react'

export default function Badgelist(props) {
    const {firstname, lastname, email, birthplace, phone, food, aboutme} = props

    return (
        <li>
            <h4>Name:</h4> <p>{firstname} {lastname}</p>
            <h4>Email:</h4> <p>{email}</p>
            <h4>Place Of Birth:</h4> <p>{birthplace}</p>
            <h4>Phone:</h4> <p>{phone}</p>
            <h4>Favortite Food:</h4> <p>{food}</p>
            <h4>About Me:</h4> <p>{aboutme}</p>
        </li>
    )
}