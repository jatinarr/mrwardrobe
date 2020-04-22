// Navigation Bar

import React from 'react'
import './navbar.styles.css'
import Cart from 'components/cart/cart.component'
import {withRouter} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

import {connect} from 'react-redux'
import cartIcon from '../../images/cart-icon.svg'
import mwLogo from '../../images/mw-dark.png'
// import {persistor} from '../../redux/store'
import {purgeCart} from '../../redux/cart/cart.actions'

// Opens the passed link using history.push()
const OpenLink = (history, match, link) => {
    history.push(`${match.url}${link}`)
}

const Navbar = (props) => {
    // console.log('nav props: ')
    // console.log(props)
    const {totalItemsInCart} = props.cartContent
    const {purgeCart} = props
    return(
        <div className='navbar'>
            <span className='left'
            onClick={ () => OpenLink(props.history, props.match, '')}
            >
            <img src={ mwLogo }
                     alt="Logo" /> 
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
                        () => 
                            {   

                                auth.signOut()
                                purgeCart()
                                // persistor.purge();
                            }
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
                
                
                <span className='cart'>
                    <span className="img-wrapper">
                        <img src={ cartIcon } alt="CART" /> 
                        {
                                totalItemsInCart < 100 ? 
                                (
                                    <span className="cart-item-count"> 
                                        {totalItemsInCart}
                                    </span>
                                ): (
                                     <span className="cart-item-count max-count-limit"> 
                                        99+
                                    </span>
                                )
                        }
                        
                       
                    </span>
                    <input type="checkbox"/>
                    <Cart/>
                </span>
            </span>
            
        </div>
    )
}

// The first argument to a mapStateToProps function is the entire Redux store state 
// It is called every time the store state changes.
// Each field in the returned object will become a prop for your actual component
const mapStateToProps = (state) => {
    return ({
        currentUser : state.user.currentUser,
        cartContent : state.cart.cartContent
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        purgeCart : () => dispatch(purgeCart())
    })
}
    
 
 export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Navbar))
// export default withRouter(Navbar)