import React from 'react'
import './checkout.styles.css'
import {connect} from 'react-redux'
import StepupStepdownInput from 'components/stepup-stepdown-input/stepup-stepdown-input.component'
import {removeItemGroup} from '../../redux/cart/cart.actions'
import {StripeCheckoutButton} from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = (props) => {
    const {cartItems,totalPrice} = props.cartContent
    const {removeItemGroup, history} = props
    return(
        Object.keys(cartItems).length === 0 ? 
        (   
            <div className="empty-cart-wrapper">
                <div className="checkout-area">
                    <h3 className="title"> Your cart is empty </h3>
                    <div className="content-wrapper">
                        <p className="content-body"> Add items to your cart and get easy checkout, returns, and customer support. 
                        </p>
                    </div>
                </div>
            </div>
        )
        :
        (
        <div className='checkout-page'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="checkout-items-wrapper">
                    {                        
                        Object.keys(cartItems).map(
                            (key) => {
                                const item = cartItems[key].item
                                return(
                                    <tr className="checkout-item" key={key}>
                                        <td>
                                        <img 
                                        src={item.imageUrl} alt={item.name}
                                        height="130" width="110"
                                        />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>
                                            <StepupStepdownInput
                                            item = {item} 
                                            value= {cartItems[key].quantity}
                                            />
                                        </td>
                                        <td>${item.price}</td>
                                        <td
                                        onClick={ 
                                            () => 
                                            removeItemGroup(item)
                                            }
                                        >&#10005;</td>
                                    </tr>
                                )
                            }
                                
                        )
                    }

                </tbody>
            </table>
            
            <div className="checkout-footer">
                <div className="continue-shopping"
                onClick={ () => history.push('shop')}
                >
                    <span>&#8592;  </span>
                    <span> Continue Shopping</span>
                </div>
                <div className="total-amount-wrapper">
                    <span>Subtotal:</span> <span>${totalPrice} </span>
                </div>
            </div>
            <div className="payment-instructions">
                <div>Please use the following test credit card for payments</div>
                <div>4242 4242 4242 4242 &#8212; Exp: 01/26 &#8212; CVV: 123</div>
            </div>
            <div className="stripe-button-wrapper">
                    <StripeCheckoutButton history={props.history} price={totalPrice}/>
            </div>
        </div>
        )
    )
}

const mapStateToProps = (state) => {
    return({
        cartContent: state.cart.cartContent
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        removeItemGroup : (item) => dispatch(removeItemGroup(item))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage)