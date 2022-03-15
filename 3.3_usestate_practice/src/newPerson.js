import React from "react"

export default function NewPerson(props) {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    )
}