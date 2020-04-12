import {combineReducers} from 'redux'
import UserReducer from './user/user.reducer.jsx'
import CartReducer from './cart/cart.reducer.jsx'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // local storage

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    // key : value where value is just a component with current User details
    user: UserReducer,
    cart: CartReducer
})


// exporting modified version of the root reducer , now with persistence capabilities
export default persistReducer(persistConfig, rootReducer)

/* root = {
        x : {},
        y : {},
        z : {}
}
*/