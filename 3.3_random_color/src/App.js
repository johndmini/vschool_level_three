import React, {useState, useEffect} from 'react'
const axios = require('axios');

export default function App() {
    const [color, setColor] = useState(`blue`)
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => setColor(`#${res.data.new_color}`))
            .catch(err => console.error(err))
    }, [count])
    return (
        <div style={{backgroundColor: color}} className="box">
            <h1>Box Color</h1>
            <button onClick={() => setCount(prev => prev +1)}>Change Color</button>
        </div>
    )
}