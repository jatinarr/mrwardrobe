import {CartActionTypes} from './cart.types.js'

const INITIAL_STATE = {
    cartItems : []
}

// Groups the duplicate items by increasing the quantity
const GroupCartItems = (cartItems, newItem) => {

    /*
    IMPORTANT: 
    whenever we make update, we always return a new object 
    so that react can detect change and re-render, else it wont
    re-render, so, everytime return a new  obejct with updated value.
    */ 
    const newCartItems = {...cartItems}
    if ( !newCartItems[newItem.id] ){
        
        newCartItems[newItem.id] = {
            item : newItem,
            quantity : 1
        }
    }
    else{
        newCartItems[newItem.id] = {
            ...newCartItems[newItem.id],
            quantity : newCartItems[newItem.id].quantity + 1
        }
    }
    return newCartItems
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM_TO_CART:
            return Object.assign( 
                {}, 
                state, 
                // {cartItems: [...state.cartItems, action.payload]}
                {
                    cartItems: 
                        GroupCartItems(state.cartItems,action.payload)
                }
            )

            
        
        default:
            return state
    }
}

export default CartReducer