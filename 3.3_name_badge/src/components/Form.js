import React from 'react'

export default function Form(props) {
    return(
        <React.Fragment>
                <input 
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                    value={props.value}
                    handleChange={props.onChange}
                />
                <input 
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={props.value}
                    handleChange={props.onChange}
                />
                <br />
                <br />
                <input 
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={props.value}
                    handleChange={props.onChange}
                />
                <input 
                    name="birthplace"
                    placeholder="Place of Birth"
                    type="text"
                    value={props.value}
                    handleChange={props.onChange}
                />
                <br />
                <br />
                <input 
                    name="phone"
                    placeholder="Phone"
                    type="number"
                />
                <input 
                    name="food"
                    placeholder="Favorite Food"
                    type="text"
                    value={props.value}
                    handleChange={props.onChange}
                />
                <br />
                <br />
                <textarea 
                    name="aboutMe"
                    placeholder="Tell us about yourself"
                    type="text"
                    value={props.value}
                    handleChange={props.onChange}
                />
                <br />
                <br />
                <button>Submit</button>
        </React.Fragment>
    )
}