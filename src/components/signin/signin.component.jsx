import React from 'react'
import './signin.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'

class Signin extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleChange = (event) => {
        const {value,name} = event.target
        this.setState({[name] : value})  
    }

    render(){
        return (
            <div className= "signin-wrapper">
                <h3> Already have an account? </h3>
                <h4> Sign in with your email and password</h4>

                <form onSubmit={this.handleSubmit}>
                    <div className="inp-field email-wrapper">
                        <input 
                        name = "email"
                        type="email"
                        value = {this.state.email}
                        onChange={this.handleChange}
                        />
                        <label>Email</label>
                    </div>

                    <div className="inp-field password-wrapper">
                        <input 
                        name="password"
                        type="password"
                        value = {this.state.password}
                        onChange={this.handleChange}
                        />
                        <label>Password</label>
                    </div>

                    <div className="buttons">
                        <CustomButton 
                        className="submit-btn btn"
                        type="submit" value="SIGN IN"
                        />
                        <CustomButton 
                        className="submit-btn-google btn" 
                        type="submit" value="SIGN IN WITH GOOGLE"
                        />
                    </div>
                </form>
 
            </div>
        )
    }
}

export default Signin