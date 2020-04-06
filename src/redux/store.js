import {createStore, applyMiddleware} from 'redux'

// import middleware
import logger from 'redux-logger'
import rootReducer from './root-reducer'

//setup middleware
const middlewares = [logger]

const store = createStore(rootReducer,applyMiddleware(...middlewares))

export default store
