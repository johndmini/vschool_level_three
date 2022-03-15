import React, {useState} from 'react'
// import Badge from './components/Badge.js'
// import Badgelist from './components/Badgelist'
// import Form from './components/Form.js'
import Data from './Data'
import './index.css'

export default function App() {
    const [badge, setBadge] = useState({})
    const [badgeList, setBadgeData] = useState([])
    const [formData, setFormData] = useState(Data)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault()
        setBadgeData(prevList => ([...prevList, formData]))
        setBadge(formData)
        setFormData(
            {
                firstname: "",
                lastname: "",
                email: "",
                birthplace: "",
                phone: "",
                food: "",
                aboutme: ""
            }
        )
    }

    const badges = badgeList.map(data => (
        <li key={data.phone}>
            <h4>Name:</h4> <p>{data.firstname} {data.lastname}</p>
            <h4>Email:</h4> <p>{data.email}</p>
            <h4>Place Of Birth:</h4> <p>{data.birthplace}</p>
            <h4>Phone:</h4> <p>{data.phone}</p>
            <h4>Favortite Food:</h4> <p>{data.food}</p>
            <h4>About Me:</h4> <p>{data.aboutme}</p>
        </li>))

    return (
        <div>
            <form name="badgeform" className="form" onSubmit={handleSubmit}>
                <input 
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                    value={formData.firstname}
                    onChange={handleChange}
                />
                <input 
                    name="lastname"
                    placeholder="Last Name"
                    type="text"
                    value={formData.lastname}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input 
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    name="birthplace"
                    placeholder="Place of Birth"
                    type="text"
                    value={formData.birthplace}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input 
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input 
                    name="food"
                    placeholder="Favorite Food"
                    type="text"
                    value={formData.food}
                    onChange={handleChange}
                />
                <br />
                <br />
                <textarea 
                    name="aboutme"
                    placeholder="Tell us about yourself"
                    type="text"
                    value={formData.aboutme}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button>Submit</button>
            </form>
            <form className="badge" onSubmit={handleSubmit}>
                <h2>Badge:</h2>
                <h3 className="badge-name">Name: <span>{badge.firstname} {badge.lastname}</span></h3>
                <h3 className="badge-phone">Phone: <span>{badge.phone}</span></h3>
                <h3 className="badge-birthplace">Place Of Birth: <span>{badge.birthplace}</span></h3>
                <h3 className="badge-food">Favorite food: <span>{badge.food}</span></h3>
                <h3 className="badge-email">Email: <span>{badge.email}</span></h3>
                <h3 className="badge-aboutme">About Me: <span>{badge.aboutme}</span></h3>
            </form>
            <div className="badgelist">
                <ul>
                    {badges}
                </ul>
            </div>
        </div>
    )
}