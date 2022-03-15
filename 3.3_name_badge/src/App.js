import React, {useState} from 'react'
import Badge from './components/Badge.js'
import Badgelist from './components/Badgelist'
import Form from './components/Form.js'
import './index.css'

export default function App() {
    const [badge, setBadge] = useState({})
    const [badgeList, setBadgeData] = useState([])
    const [formData, setFormData] = useState(
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
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
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
        <Badgelist 
            key={data.phone}
            {...data}
        />
    ))

    return (
        <div>
            <form name="badgeform" className="form" onSubmit={handleSubmit}>
                <Form
                    onChange={handleChange}
                />
                <div className="badge">
                    <Badge 
                        {...badge}
                        />
                </div>
            </form>
            <div className="badgelist">
                <ul>
                    {badges}
                </ul>
            </div>
        </div>
    )
}