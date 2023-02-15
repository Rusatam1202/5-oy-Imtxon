import {createStore,applyMiddleware} from "redux"
import { rootRedacer } from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


export const store = createStore(rootRedacer,
    composeWithDevTools(applyMiddleware(thunk))
    )