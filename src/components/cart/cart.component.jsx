// Cart

import React from 'react'
import './cart.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'
import CartItem from 'components/cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import  {connect} from 'react-redux'

// Opens the passed link using history.push()
const OpenLink = (history, match, link) => {
    history.push(`${match.url}${link}`)
}

const Cart = (props) => {
    // console.log("in cart");
    // console.log(props)
    const {cartItems,totalItemsInCart} = props.cartContent
    return(
        <div className="cart-overview">
            <div className="cart-items-wrapper">
              { totalItemsInCart !== 0 ? 
                    (
                        Object.keys(cartItems).map(
                            (key) => 
                            <CartItem
                            key={key}
                            cartItem={cartItems[key]}
                            />
                        )
                    )
                    :
                    (
                        <div className="empty-cart-text"> 
                            <p className="title"> Your cart looks empty </p>
                            <p className="info"> Go ahead and add something!</p>
                        </div>
                    )
                }

            </div>
            { totalItemsInCart !== 0 ?
               ( <div className="checkout-btn">
                    <CustomButton 
                    className="submit-btn btn"
                    value="GO TO CHECKOUT"
                    onClick= { () => OpenLink(props.history, props.match,'checkout')}
                    />
                </div>) : (null)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        cartContent : state.cart.cartContent
    })
}

export default connect(mapStateToProps)(withRouter(Cart))