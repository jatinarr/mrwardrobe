import React from 'react'

const CartItem = (props) => {
    // console.log("in cart item");
    // console.log(props)
    const {cartItem} = props
    return(
            <div className="cart-item"> 
                <span className="item-img">
                    <img src={cartItem.item.imageUrl} alt="item" height="50" width="50"></img> 
                </span>
                <span className="item-info">
                    <div> {cartItem.item.name}</div>
                    <div> {cartItem.quantity} x ${cartItem.item.price} </div>
                </span>
            </div>
    )
}

export default CartItem