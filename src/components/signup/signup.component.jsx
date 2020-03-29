import React from 'react'
import './signup.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'
import CustomInputField from 'components/custom-input-field/custom-input-field.component'



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
        event.preventDefault()
        console.log(this.state)
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
                        <CustomInputField 
                        className = "inp-field"
                        name="name" type="text"
                        value = {this.state.name}
                        onChange={this.handleChange}
                        label="Name"
                        />

                        <CustomInputField 
                        className = "inp-field"
                        name="email" type="email"
                        value = {this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        />

                         <CustomInputField 
                        className = "inp-field"
                        name="password" type="password"
                        value = {this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        />

                        <CustomInputField 
                        className = "inp-field"
                        name="confirm_password" type="password"
                        value = {this.state.confirm_password}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        />  
                                                            

                    <div className="buttons">
                        <CustomButton
                        className="submit-btn btn" 
                        type="submit" value="SIGN UP"
                        />
                    </div>
                </form>
 
            </div>
        )
    }
}

export default Signup