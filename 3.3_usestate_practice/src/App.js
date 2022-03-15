import React from "react"
import NewPerson from './newPerson'
import './index.css'


// Task 2

// export default function App() {
//     const [color, setColor] = React.useState("Pink")

//     const changeColor = () => {
//         setColor(prevColor => prevColor === 'Pink' ? 'Blue':'Pink' )
//     }
//     return (
//         <div>
//             <h1 onClick={changeColor}>{color}</h1>
//         </div>
//     )
// }

//  Task 3

// export default function App() {
//     const [people, setPeople] = React.useState([
//         {
//             firstName: "John",
//             lastName: "Smith"
//         }
//     ])

//     const [Person] = React.useState({
//         firstName: "Mark",
//         lastName: "Doe"
//     })

//     const addPerson = () => {
//         setPeople((prevPeople) => [...prevPeople, {...Person}])
//     }
    
//     const listOfPeople = people.map((person, index) => 
//     <NewPerson
//     key={index+person.lastName}
//     firstName={person.firstName}
//     lastName={person.lastName}
//     />)
//     return (
//         <div>
//             <button onClick={addPerson}>Do Something</button>
//             {listOfPeople}
//         </div>
//     )
// }

// Task 4


// export default function App(){
//     const [colors, setColors] = React.useState(["pink", "blue"])

//     const newColors = () => {
//         setColors(prevColors => [...prevColors, "green"])
//     }
    
//     const [countObject, setCountObject] = React.useState({
//         count: 0
//     })
//     const newCount = () => {
//         setCountObject(prevCount => ({...prevCount, count: + 1}))
//     }
//     return(
//         <div>
//             <h1 onClick={newColors}>{colors}</h1>
//             <h2 onClick={newCount}>Hi</h2>
//         </div>
//     )
// }

// Task 5

// export default function App() {
//     const [people, setPeople] = React.useState([
//         {
//             firstName: "John",
//             lastName: "Smith"
//         }
//     ])

//     const [Person] = React.useState({
//         firstName: "Mark",
//         lastName: "Doe"
//     })

//     const addPerson = () => {
//         setPeople((prevPeople) => [...prevPeople, {...Person}])
//     }

//     const age = 30    
//     const addProperty = () => {
//         setPeople(prevPeople => ({...prevPeople, age}))
//     }
    
//     // const listOfPeople = people.map((person, index) => 
//     // <NewPerson
//     // key={index+person.lastName}
//     // firstName={person.firstName}
//     // lastName={person.lastName}
//     // />)
//     return (
//         <div>
//             <button onClick={addPerson}>Do Something</button>
//             <button onClick={addProperty}>Add Age</button>
//             {/* {listOfPeople} */}
//         </div>
//     )
// }