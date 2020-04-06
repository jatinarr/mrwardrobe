// Navigation Bar

import React from 'react'
import './navbar.styles.css'
import {Cart} from 'components/cart/cart.component'
import {withRouter} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

import {connect} from 'react-redux'

// Opens the passed link using history.push()
const OpenLink = (history, match, link) => {
    history.push(`${match.url}${link}`)
}

const Navbar = (props) => {
    // console.log('nav props: ')
    // console.log(props)
    return(
        <div className='navbar'>
            <span className='left'
            onClick={ () => OpenLink(props.history, props.match, '')}
            > LOGO
            </span>
            <span className='right'>
                <span
                onClick={ () => OpenLink(props.history, props.match, 'shop')}
                > SHOP 
                </span>
                
                <span> CONTACT </span>
                {
                    props.currentUser
                    ? (
                    <span
                    onClick = { 
                        () => {auth.signOut()}
                    }
                    > SIGN OUT 
                    </span>
                    ):(
                    <span
                    onClick = { () => OpenLink(props.history, props.match, 'signin')}
                    > SIGN IN 
                    </span>
                    )
                }
                
                
                <span className='cart'><Cart/></span>
            </span>
            
        </div>
    )
}

// The first argument to a mapStateToProps function is the entire Redux store state 
// It is called every time the store state changes.
// Each field in the returned object will become a prop for your actual component
const mapStateToProps = (state) => {
    // console.log("HERE1")
    // console.log(state)
    return ({
        currentUser: state.user.currentUser
    })
}
    
 
 export default connect(mapStateToProps)(withRouter(Navbar))
// export default withRouter(Navbar)