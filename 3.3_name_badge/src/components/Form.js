import React from 'react'

export default function Form(props) {
    const {firstname, lastname, email, birthplace, phone, food, aboutme} = props

    return(
        <React.Fragment>
                <input 
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                    value={firstname}
                    onChange={props.onChange}
                />
                <input 
                    name="lastname"
                    placeholder="Last Name"
                    type="text"
                    value={lastname}
                    onChange={props.onChange}
                />
                <br />
                <br />
                <input 
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={props.onChange}
                />
                <input 
                    name="birthplace"
                    placeholder="Place of Birth"
                    type="text"
                    value={birthplace}
                    onChange={props.onChange}
                />
                <br />
                <br />
                <input 
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    value={phone}
                    onChange={props.onChange}
                />
                <input 
                    name="food"
                    placeholder="Favorite Food"
                    type="text"
                    value={food}
                    onChange={props.onChange}
                />
                <br />
                <br />
                <textarea 
                    name="aboutme"
                    placeholder="Tell us about yourself"
                    type="text"
                    value={aboutme}
                    onChange={props.onChange}
                />
                <br />
                <br />
                <button>Submit</button>
        </React.Fragment>
    )
}