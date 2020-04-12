import React from 'react'
import './signin-signup-page.styles.css'
import Signin from 'components/signin/signin.component'
import Signup from 'components/signup/signup.component'

const SigninSignupPage = () => {
    return(
        <div className="signin-signup-page">
            <Signin />
            <Signup />
        </div>
    )
}

export default SigninSignupPage