// Navigation Bar

import React from 'react'
import './navbar.styles.css'
import {Cart} from 'components/cart/cart.component'

export const Navbar = () => {
    return(
        <div className='navbar'>
            <span className='left'>
                LOGO
            </span>
            <span className='right'>
                <span> SHOP </span>
                <span> CONTACT </span>
                <span> SIGN IN </span>
                <span className='cart'><Cart/></span>
            </span>
            
        </div>
    )
}