import {combineReducers, createStore} from "redux"
import {countReducer} from "./counter_reducer";
import {loadState, saveState} from "../utils/LocalStorage-utils";


const rootReducer = combineReducers({  // 2
    count: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>   // типизация  Redux store



// const persistedTodosString = localStorage.getItem('app-state')
// if (persistedTodosString){
//     preloadedState = JSON.parse(persistedTodosString)
// }

export const store = createStore(rootReducer, loadState()); // 3

store.subscribe(() => {
   saveState({
       count: store.getState().count
   })
})
