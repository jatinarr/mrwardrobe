import {CartActionTypes} from './cart.types.js'

export const addItemToCart = (item) => {
    return({
        type: CartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    })
}