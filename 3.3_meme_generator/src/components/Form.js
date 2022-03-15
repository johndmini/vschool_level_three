import React from 'react';
import memesData from '../memesData.js'

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function getMemeImage(e) {
        e.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <div className="form">
            <form>
                <input 
                    name="topText"
                    type="text" 
                    className="text-box" 
                    placeholder='Top Text'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    name="bottomText"
                    type="text" 
                    className="text-box" 
                    placeholder='Bottom Text'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <br />
                <input 
                    onClick={getMemeImage} 
                    type="submit" 
                    className="generate" 
                    value="Get a new meme image 🖼"
                />
            </form>
            <div className="meme-container">
                <img src={meme.randomImage} className="meme-Image" alt=""/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}