import { REMOVE_USER, SET_USER } from "./USERType"



export const setUser= (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}
export const removeUser = () => {
    return {
        type: REMOVE_USER,
        payload: ''
    }
}