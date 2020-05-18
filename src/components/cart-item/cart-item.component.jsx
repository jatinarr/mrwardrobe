import React from 'react'
import {CartItemContainer, ItemInfo} from './cart-item.styles'

const CartItem = (props) => {
    // console.log("in cart item");
    // console.log(props)
    const {cartItem} = props
    return(
            <CartItemContainer> 
                <span className="item-img">
                    <img src={cartItem.item.imageUrl} alt="item" height="50" width="50"></img> 
                </span>
                <ItemInfo>
                    <div> {cartItem.item.name}</div>
                    <div> {cartItem.quantity} x ${cartItem.item.price} </div>
                </ItemInfo>
            </CartItemContainer>
    )
}

export default CartItem