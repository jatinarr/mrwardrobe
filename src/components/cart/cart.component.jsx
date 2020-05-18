// Cart

import React from 'react'
import CustomButton from 'components/custom-button/custom-button.component'
import CartItem from 'components/cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import  {connect} from 'react-redux'

import{    CartOverviewContainer,
    CartItemsWrapperContainer,
    EmptyCartTextContainer,
    TitleContainer,
    InfoContainer,
    CheckoutButtonContainer,
    cbBtnContainer,
    ToCheckoutPage
    } from './cart.styles.jsx'

// Opens the passed link using history.push()
const OpenLink = (history, match, link) => {
    history.push(`${match.url}${link}`)
}

const Cart = (props) => {
    // console.log("in cart");
    // console.log(props)
    const {cartItems,totalItemsInCart} = props.cartContent
    return(
        <CartOverviewContainer>
            <CartItemsWrapperContainer>
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
                        <EmptyCartTextContainer> 
                            <TitleContainer> Your cart looks empty </TitleContainer>
                            <InfoContainer> Go ahead and add something!</InfoContainer>
                        </EmptyCartTextContainer>
                    )
                }

            </CartItemsWrapperContainer>
            { totalItemsInCart !== 0 ?
               ( <CheckoutButtonContainer>
                    <ToCheckoutPage
                    value="GO TO CHECKOUT"
                    onClick= { () => OpenLink(props.history, props.match,'checkout')}
                    />
                </CheckoutButtonContainer>) : (null)
            }
        </CartOverviewContainer>
    )
}

const mapStateToProps = (state) => {
    return({
        cartContent : state.cart.cartContent
    })
}

export default connect(mapStateToProps)(withRouter(Cart))