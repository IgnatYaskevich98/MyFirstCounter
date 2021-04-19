import {combineReducers, createStore} from "redux"
import {countReducer} from "./counter_reducer";
import {current} from "@reduxjs/toolkit";


const rootReducer = combineReducers({  // 2
    count: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>   // типизация  Redux store

export const store = createStore(rootReducer); // 3

store.subscribe(() => {
    localStorage.setItem('app-store', JSON.stringify(store.getState()))
    localStorage.setItem('', JSON.stringify(store.getState().count.value))
})
