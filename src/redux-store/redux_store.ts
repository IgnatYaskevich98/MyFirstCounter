import {combineReducers, createStore} from "redux"
import {countReducer} from "./counter_reducer";
import {loadState, saveState} from "../utils/LocalStorage-utils";


const rootReducer = combineReducers({
    count: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>   // типизация  Redux store

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
   saveState({
       count: store.getState().count
   })
})
