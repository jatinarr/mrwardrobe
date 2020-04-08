import {CartActionTypes} from './cart.types.js'

const INITIAL_STATE = {
    cartItems: [{},0]
}

// Groups the duplicate items by increasing the quantity
const GroupCartItems = (cartItems, newItem) => {

    /*
    IMPORTANT: 
    whenever we make update, we always return a new object 
    so that react can detect change and re-render, else it wont
    re-render, so, everytime return a new  obejct with updated value.
    */ 
    const newCartItems = [...cartItems]

    const itemsDict = newCartItems[0]
    const totalItems = newCartItems[1]


    // if item not present, add it
    if ( !itemsDict[newItem.id] ){
        
        itemsDict[newItem.id] = {
            item : newItem,
            quantity : 1
        }
    }

    // else increase the quantity
    else{
        itemsDict[newItem.id] = {
            ...itemsDict[newItem.id],
            quantity : itemsDict[newItem.id].quantity + 1
        }
    }

    // updating total items count
    newCartItems[1] = totalItems + 1

    // returns the new object with updated content
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
                        GroupCartItems(state.cartItems, action.payload)
                }
            )

            
        
        default:
            return state
    }
}

export default CartReducer