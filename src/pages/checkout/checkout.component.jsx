import React from 'react'
import './checkout.styles.css'
import {connect} from 'react-redux'
import StepupStepdownInput from 'components/stepup-stepdown-input/stepup-stepdown-input.component'
import {removeItemGroup} from '../../redux/cart/cart.actions'

const CheckoutPage = (props) => {
    const {cartItems} = props.cartContent
    const {removeItemGroup} = props
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