import {CartActionTypes} from './cart.types.js'

const INITIAL_STATE = {
    cartItems : {}
}

// Groups the duplicate items by increasing the quantity
const GroupCartItems = (cartItems, newItem) => {
    if ( !cartItems[newItem.id] ){
        
        cartItems[newItem.id] = {
            item : newItem,
            quantity : 1
        }
    }
    else{
        cartItems[newItem.id] = {
            ...cartItems[newItem.id],
            quantity : cartItems[newItem.id].quantity + 1
        }
    }
    return cartItems
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM_TO_CART:
            return Object.assign( 
                {}, 
                state, 
                // {cartItems: [...state.cartItems, action.payload]}
                {cartItems: 
                    GroupCartItems(state.cartItems,action.payload)
                }
            )
        
        default:
            return state
    }
}

export default CartReducer