import {CartActionTypes} from './cart.types.js'

const INITIAL_STATE = {
    cartContent: {
        cartItems: {},
        totalItemsInCart: 0
    }
}

// Groups the duplicate items by increasing the quantity
const GroupCartItems = (cartContent, newItem) => {

    /*
    IMPORTANT: 
    whenever we make update, we always return a new object 
    so that react can detect change and re-render, else it wont
    re-render, so, everytime return a new  obejct with updated value.
    */ 
    const newCartContent = {...cartContent}

    // if item not present, add it
    if ( !newCartContent.cartItems[newItem.id] ){
        
        newCartContent.cartItems[newItem.id] = {
            item : newItem,
            quantity : 1
        }
        newCartContent.totalItemsInCart += 1
    }

    // else increase the quantity
    else{
        newCartContent.cartItems[newItem.id] = {
            ...newCartContent.cartItems[newItem.id],
            quantity : newCartContent.cartItems[newItem.id].quantity + 1
        }
        newCartContent.totalItemsInCart += 1
    }

    // returns the new object with updated content
    return newCartContent
}


const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM_TO_CART:
            return Object.assign( 
                {}, 
                state, 
                // {cartItems: [...state.cartItems, action.payload]}
                {
                    cartContent: 
                        GroupCartItems(state.cartContent, action.payload)
                }
            )

            
        
        default:
            return state
    }
}

export default CartReducer