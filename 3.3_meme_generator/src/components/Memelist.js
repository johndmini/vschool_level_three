import React from 'react';

export default function Memelist(props) {
    const {randomImage, topText, bottomText, id, onSubmit} = props;
    return (
            <form className="meme-list" id={id} onSubmit={onSubmit}>
                <img src={randomImage} className="meme-listImage" alt=""/>
                <h2 className="meme-listTextTop">{topText}</h2>
                <h2 className="meme-listTextBottom">{bottomText}</h2>
                <br />
                <button className="delete-list">Delete</button>
                {/* <button className="edit-list" onClick={() => handleEditList()}>Edit</button> */}
            </form>
    )
}