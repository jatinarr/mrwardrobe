import React from 'react'
import './signup.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'
import CustomInputField from 'components/custom-input-field/custom-input-field.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'



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

    handleSubmit = async (event) => {
        event.preventDefault()
        const displayName = this.state.name

        try{
            const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                name: "",
                email: "",
                password:"",
                confirm_password:""
            })
        }

        catch(error){
            console.error(error)
        }

        // .then( (userCredentials) => {
        //     ;
        //     if (userCredentials.user != null){
        //         userCredentials.user.updateProfile({
        //             displayName:this.state.name,
        //             password:this.state.password
        //         }).then((res) => {; ; return  userCredentials})
        //     }
        //     else{
        //         
        //     }
        // })
        // .catch( (error: Error) => {
        //     alert(error.message);
        //     
        //     auth.fetchSignInMethodsForEmail(this.state.email)
        //     .then((response) => {
        //         alert("You previously logged in via: " + response[0])
        //     })
        // })
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