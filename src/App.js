import React from 'react';
import Navbar from 'components/navbar/navbar.component'
import HomePage from 'pages/homepage/homepage.component.jsx'
import ShopPage from 'pages/shop/shop.component.jsx'
import SigninSignupPage from 'pages/signin-signup-page/signin-signup-page.component'
import CheckoutPage from 'pages/checkout/checkout.component'

import './App.css';
import {Route} from 'react-router-dom'
import {withRouter, Redirect} from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import {auth,createUserProfileDocument } from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component{
    unsubscribeFromAuth = null

    componentDidMount(){
        const {setCurrentUser} = this.props
    
        // subscription always open between firebase and our app
        // onAuthStateChanged always running to check if there are any
        // changes in the state of auth object i.e whether the user
        // has logged in or logged out
        // always on! always checking! 
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
            // if a user is signed in
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                // check if our db has been updated
                userRef.onSnapshot((snapshot => {
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                    })
                }))
            }

            else{
                setCurrentUser(userAuth)
            }
            
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }

    render(){
        return (
            <div className='app'> 
                <div className='fixed-component'>
                    <Navbar/>
                </div>
                <div className="dynamic-component">
                
                    <Route exact path='/' component={HomePage}/>

                    <Route path='/shop' component={ShopPage}/>
                    
                    <Route 
                    exact path='/signin' 
                    render = { 
                        () => this.props.currentUser ? 
                            (<Redirect to = '/' />):
                            (<SigninSignupPage />)
                        }/>

                    <Route path='/checkout' component={CheckoutPage}/>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    // console.log("mapStateToProps: ")
    // console.log(state)
        return({
            currentUser: state.user.currentUser
        })
}


/* What will end up returning inside mapDispatchToProps? : setCurrentUser
 which goes to a function that gets the uer object and calls dispatch

 using dispatch, redux knows that whatever object is passed to dispatch()
 is going to be an action object, which is to be passed to every reducer 

 so our user.action.js gets a user object but returns an action object!
*/

// const mapDispatchToProps = (dispatch) => {
//     setCurrentUser(user)
// }

const mapDispatchToProps = (dispatch) => {
    return ({
        setCurrentUser : (user) => dispatch(setCurrentUser(user))
    })
}
    

// since no change to state here, the first prop: map to state not required, pass null
// pass mapDispatch.. as second prop
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
