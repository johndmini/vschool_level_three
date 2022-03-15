import React from 'react';

export default function Blogpost(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h3><span className="graytalized">Posted By</span> {props.author} <span>on {props.date}</span></h3>
        </div>
    )
}