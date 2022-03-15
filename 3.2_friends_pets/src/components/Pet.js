import React from 'react'

export default function Pets({petName, breed}) {
    return (
        <div>
            <p>{petName}</p>
            <p>{breed}</p>
        </div>
    )
}