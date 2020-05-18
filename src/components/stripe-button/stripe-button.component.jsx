import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {persistor} from '../../redux/store'

const onToken = (history,toggleConfirmModalVisibility) => {
    persistor.purge();
    // history.push("/")
    document.body.style.overflow="hidden";
    toggleConfirmModalVisibility(true)
}

const StripeCheckoutButton = ({history, price, toggleConfirmModalVisibility}) => {
    const priceForStripe = price*100;
    const PUBLISHABLE_KEY = "pk_test_P8zq5zSsahQ1pFMCfswEUqvs00yRCRX8nL"

    return(
        <StripeCheckout 
        label = "Pay Now"
        name = "Mr Wardrobe"
        billingAddress
        shippingAddress
        image = "https://i.ibb.co/fd8xG6T/mw-light.png"
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {() => onToken(history,toggleConfirmModalVisibility)}
        stripeKey={PUBLISHABLE_KEY}
        />
    )
} 


export {StripeCheckoutButton}