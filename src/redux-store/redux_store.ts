import {combineReducers, createStore} from "redux"
import {countReducer} from "./counter_reducer";



const rootReducer  = combineReducers({  // 2
    count: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>   // типизация  Redux store

export const store = createStore(rootReducer); // 3


