import React from 'react';

export default function Post(props) {
    return (
        <div className="post">
            <h1 className="post-title">{props.title}</h1>
            <h2 className="post-subtitle">{props.subTitle}</h2>
            <h3 className="post-stats"><span className="graytalized">Posted By</span> {props.author} <span className="graytalized">on {props.date}</span></h3>
        </div>
    )
}