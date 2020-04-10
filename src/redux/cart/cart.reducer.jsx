import {CartActionTypes} from './cart.types.js'

const INITIAL_STATE = {
    cartContent: {
        cartItems: {},
        totalItemsInCart: 0
    }
}

// Adds an item and also "Groups the duplicate items" by increasing the quantity
const AddAnItem = (cartContent, newItem) => {
    // console.log("----AddAnItem---")

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
    }

    // else increase the quantity
    else{
        newCartContent.cartItems[newItem.id] = {
            ...newCartContent.cartItems[newItem.id],
            quantity : newCartContent.cartItems[newItem.id].quantity + 1
        }
    }
    
    // increment the total count
    newCartContent.totalItemsInCart += 1
    
    // returns the new object with updated content
    return newCartContent
}


// Remove items one by one
const RemoveAnItem = (cartContent, item) => {
// console.log("----RemoveAnItem---")
    // lets create a new copy to work upon, as per react rules
    const newCartContent = {...cartContent}

    // if quantity id more than 1, then just reduce the quantity
    if ( newCartContent.cartItems[item.id].quantity > 1 ){
        newCartContent.cartItems[item.id] = {
            item : item,
            quantity : newCartContent.cartItems[item.id].quantity - 1
        }
    }

    // else if quantity is equal to one, remove entry
    else{
        delete newCartContent.cartItems[item.id]
    }

    // decrement the total count
    newCartContent.totalItemsInCart -= 1

    // returns the new object with updated content
    return newCartContent
}

// Remove entire group of items i.e. number of items >= 1
const RemoveItemGroup = (cartContent, item) => {
    // console.log("----RemoveItemGroup---")
    // lets create a new copy to work upon, as per react rules
    const newCartContent = {...cartContent}

    // holds the current quantity for calculating total items
    const quantity_before_removal = newCartContent.cartItems[item.id].quantity
    
    delete newCartContent.cartItems[item.id]
    
    // decrement the total count negating the quantity_before_removal
    newCartContent.totalItemsInCart -= quantity_before_removal

    return newCartContent
}


const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM_TO_CART:
            return Object.assign( 
                {}, 
                state,
                {
                    cartContent: 
                        AddAnItem(state.cartContent, action.payload)
                }
            )

        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return Object.assign(
                {},
                state,
                {
                    cartContent: 
                        RemoveAnItem(state.cartContent, action.payload)
                }
            )   
        
        case CartActionTypes.REMOVE_ITEM_GROUP:
            return Object.assign(
                {},
                state,
                {
                    cartContent: 
                        RemoveItemGroup(state.cartContent, action.payload)
                }
            )   
        
        default:
            return state
    }
}

export default CartReducer