import {createStore, applyMiddleware} from 'redux'

// import middleware
import logger from 'redux-logger'
import rootReducer from './root-reducer'

import {persistStore} from 'redux-persist'

//setup middleware
const middlewares = []

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middlewares))

// creates persisted version of store
const persistor = persistStore(store)

export {
    store,
    persistor
}
