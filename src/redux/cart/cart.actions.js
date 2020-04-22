import {CartActionTypes} from './cart.types.js'

export const addItemToCart = (item) => {
    return({
        type: CartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    })
}

export const removeItemFromCart = (item) => {
    return({
        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    })
}

export const removeItemGroup = (item) => {
    return({
        type: CartActionTypes.REMOVE_ITEM_GROUP,
        payload: item
    })
}

export const purgeCart = () => {
    // console.log("purgeCart")
    return({
        type: CartActionTypes.PURGE_CART,
        payload: null
    })
}