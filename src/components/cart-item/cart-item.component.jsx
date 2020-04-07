import React from 'react'

const CartItem = (props) => {
    const {cartItem} = props
    return(
            <div className="cart-item"> 
                <span className="item-img"> 
                    <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="item1" height="50" width="50"></img> 
                </span>
                <span className="item-info">
                    <div> {cartItem.item.name}</div>
                    <div> {cartItem.quantity} x ${cartItem.item.price} </div>
                </span>
            </div>
    )
}

export default CartItem