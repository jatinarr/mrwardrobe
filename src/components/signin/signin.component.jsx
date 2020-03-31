import React from 'react'
import './signin.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'
import CustomInputField from 'components/custom-input-field/custom-input-field.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'
import {signInWithEmail} from '../../firebase/firebase.utils'

class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // 
    }

    handleChange = (event) => {
        const {value,name} = event.target
        this.setState({[name] : value})  
    }

    handleEmailSignin = () => {
        const {email, password} = this.state
        signInWithEmail({email,password})
    }

    render(){
        return (
            <div className= "signin-wrapper">
                <h3> Already have an account? </h3>
                <h4> Sign in with your email and password</h4>
                <form onSubmit={this.handleSubmit}>
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

                    <div className="buttons">
                        <CustomButton 
                        className="submit-btn btn"
                        value="SIGN IN"
                        onClick = {this.handleEmailSignin}
                        />
                        <CustomButton 
                        className="submit-btn-google btn"
                        value="SIGN IN WITH GOOGLE"
                        onClick = {signInWithGoogle}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin