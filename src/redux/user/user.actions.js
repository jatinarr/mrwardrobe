
/* action types
*/

import {UserActionTypes} from './user.types'
// export const SET_CURRENT_USER = 'SET_CURRENT_USER'
// export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'


/* action creaters :
    return objects with type and payload
*/
export const setCurrentUser = (user) => {
    return ({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    })
}

// export const boundSetCurrentUser = (user) => dispatch(setCurrentUser(user))
// export const removeCurrentUser = (user) => {
//     return {type:REMOVE_CURRENT_USER, payload: user}
// }