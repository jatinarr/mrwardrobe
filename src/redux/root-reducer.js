import {combineReducers} from 'redux'
import {UserReducer} from './user/user.reducer'
import {CartReducer} from './cart/cart.reducer'
import {HomepageReducer} from './homepage/homepage.reducer'
import {ShopReducer} from './shop/shop.reducer'

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
    cart: CartReducer,
    homepage: HomepageReducer,
    shop: ShopReducer
})


// exporting modified version of the root reducer , now with persistence capabilities
export default persistReducer(persistConfig, rootReducer)

/* root = {
        x : {},
        y : {},
        z : {}
}
*/