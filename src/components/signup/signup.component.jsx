import React from 'react'
import './signup.styles.css'

class Signup extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password:"",
            confirm_password:""
        }
    }

    handleSubmit = (event) => {
        // event.preventDefault()
    }

    handleChange = (event) => {
        const {value,name} = event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="signup-wrapper">
                <h3> Don't have an account? </h3>
                <h4> Sign up with your email and password</h4>

                <form onSubmit={this.handleSubmit}>
                    <div className="inp-field name-wrapper">
                        <input 
                        name = "name"
                        type="text" 
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                        <label>Name</label>
                    </div>

                    <div className="inp-field email-wrapper">
                        <input 
                        name = "email"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <label>Email</label>
                    </div>

                    <div className="inp-field password-wrapper">
                        <input 
                        name="password"
                        type="password" 
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                        <label>Password</label>
                    </div>

                    <div className="inp-field confirm-password-wrapper">
                        <input 
                        name="confirm_password"
                        type="password"
                        required
                        value={this.state.confirm_password}
                        onChange={this.handleChange}
                        />
                        <label>Confirm Password</label>
                    </div>

                    <div className="buttons">
                         <input className="submit-btn btn" type="submit" value="SIGN UP"/>
                    </div>
                </form>
 
            </div>
        )
    }
}

export default Signup