import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

// if no state then take initial but if null passed then no default
// action : {type: "", payload: object}
// takes action as inpu and returns state as output
const UserReducer = (state = INITIAL_STATE, action) => {
    // console.log(state)
    // console.log(action)

    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            // return ({
            //     ...state,
            //     currentUser: action.payload
            // })

            return Object.assign({}, state,{currentUser: action.payload})

        default:
            return state
    }

}

export default UserReducer