import {createSelector} from 'reselect';

const selectCart = (state) => state.cart

export const selectCartContent = createSelector(
    [selectCart],
    (cart) => {
        return cart.cartContent
    }
)