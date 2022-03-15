import React from 'react';
import Blogpost from './Blogpost'
import data from './data'

export default function List() {
    const posts = data.map(post => 
    <Blogpost 
    key={post.id}
    {...post}
    />
    )
    return (
        <div className="post-container">
            {posts}
        </div>
    )
}



const [person, setPerson] = useState({
    name: "Smith", 
    age: 10, 
    favoriteColors: ["pink", "blue"]
 })


 function handleChange() {
     setPerson(prevPerson => ({...prevPerson, favoriteColors: [...prevPerson.favoriteColors, "red"]}))
 }