// Cart

import React from 'react'
import './cart.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'
import CartItem from 'components/cart-item/cart-item.component'
import  {connect} from 'react-redux'

const Cart = (props) => {
    // console.log("in cart");
    // console.log(props)
    const {cartItems} = props
    // console.log(cartItems)
    return(
        <div className="cart-overview">
            <div className="cart-items-wrapper">
              { cartItems.length != 0 ? 
                    (
                        Object.keys(cartItems[0]).map(
                            (key) => 
                            <CartItem
                            key={key}
                            cartItem={cartItems[0][key]}
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
            { cartItems.length != 0 ?
               ( <div className="checkout-btn">
                    <CustomButton 
                    className="submit-btn btn"
                    value="GO TO CHECKOUT"
                    />
                </div>) : (null)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        cartItems : state.cart.cartItems
    })
}

export default connect(mapStateToProps)(Cart)