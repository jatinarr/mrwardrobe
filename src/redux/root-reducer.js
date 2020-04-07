import {combineReducers} from 'redux'
import UserReducer from './user/user.reducer.jsx'
import CartReducer from './cart/cart.reducer.jsx'

export default combineReducers({
    // key : value where value is just a component with current User details
    user: UserReducer,
    cart: CartReducer
})


/* root = {
        x : {},
        y : {},
        z : {}
}
*/