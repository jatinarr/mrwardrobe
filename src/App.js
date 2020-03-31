import React from 'react';
import Navbar from 'components/navbar/navbar.component'
import HomePage from 'components/homepage/homepage.component.jsx'
import ShopPage from 'components/shop/shop.component.jsx'
import SigninSignupPage from 'components/signin-signup-page/signin-signup-page.component.jsx'

import './App.css';
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import {auth,createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null

    componentDidMount(){

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
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, this.props.history.push('/'))
                }))
            }

            else{
                this.setState({currentUser: userAuth})
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
                    <Navbar currentUser={this.state.currentUser}/>
                </div>
                <div className="dynamic-component">
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/shop' component={ShopPage}></Route>
                    <Route exact path='/signin' component={SigninSignupPage}></Route>

                </div>
            </div>
        );
    }
}

export default withRouter(App);
