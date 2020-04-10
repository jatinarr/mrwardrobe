import React from 'react'
import './stepup-stepdown-input.styles.css'
import {addItemToCart,removeItemFromCart} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'



const StepupStepdownInput = (props) => {
    const {value} = props
    const {item, addItemToCart, removeItemFromCart} = props
    return(
        <div className="stepup-stepdown-input-wrapper">
            <span 
            className="step-decrement"
            onClick = {
                    () => removeItemFromCart(item)
                }
            > 
                &#8722; 
            </span>
            <span className="step-input-field"> 
                <input readOnly type="number" value={value}/>
            </span>
            <span 
            className="step-increment"
            onClick = {
                    () => addItemToCart(item)
                }
            > 
                &#43; 
            </span>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return({
        addItemToCart : (item) => dispatch(addItemToCart(item)),
        removeItemFromCart : (item) => dispatch(removeItemFromCart(item))
    })
}


export default connect(null,mapDispatchToProps)(StepupStepdownInput)