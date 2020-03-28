// Navigation Bar

import React from 'react'
import './navbar.styles.css'
import {Cart} from 'components/cart/cart.component'
import {withRouter} from 'react-router-dom'

// Opens the passed link using history.push()
const OpenLink = (history, match, link) => {
    history.push(`${match.url}${link}`)
}

const Navbar = (props) => {
    return(
        <div className='navbar'>
            <span className='left'
            onClick={ () => OpenLink(props.history, props.match, '')}
            > LOGO
            </span>
            <span className='right'>
                <span 
                onClick={ () => OpenLink(props.history, props.match, 'shop')}
                > SHOP </span>
                <span> CONTACT </span>
                <span
                onClick = { () => OpenLink(props.history, props.match, 'signin')}
                > SIGN IN </span>
                <span className='cart'><Cart/></span>
            </span>
            
        </div>
    )
}

export default withRouter(Navbar)