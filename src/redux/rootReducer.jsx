import { useReducer } from "react";
import { combineReducers } from "redux";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./users/userReducer";

export const rootRedacer =combineReducers ({
    token:tokenReducer,
    user:userReducer

})