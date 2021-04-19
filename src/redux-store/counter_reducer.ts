type InitialStatePropsType = typeof initialState    //  автоматическая типизация

const initialState = {        /*  4  */
    value: 0,
    min: 0,
    max: 0,
    text: true,
    button: false
}
export  type ActionTypes = ReturnType<typeof addValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof changeMaxAC>
    | ReturnType<typeof changeMinAC>
    | ReturnType<typeof setValueAC>
    | ReturnType<typeof setTextAC>
    | ReturnType<typeof setButtonAC>


export const countReducer = (state: InitialStatePropsType = initialState, action: ActionTypes): InitialStatePropsType=> {    // 1     (ВАЖНО передать данные по default  (initialState)
    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,
                value: state.value + 1
            }
        case  RESET_VALUE :
            return {
                ...state, value: 0
            }
        case CHANGE_MAX:
            return {
                ...state, max: action.newValue
            }
        case CHANGE_MIN:
            return {
                ...state, min: action.newValue
            }
        case SET_VALUE:
            return {
                ...state, value: action.newValue
            }
        case SET_TEXT:
            return {
                ...state, text: action.text
            }
        case SET_BUTTON:
            return {
                ...state, text: action.button
            }
    }
    return state
}


export const ADD_VALUE = 'ADD_VALUE'
export const SET_VALUE = 'SET_VALUE'
export const RESET_VALUE = 'RESET_VALUE'
export const CHANGE_MAX = 'CHANGE_MAX'
export const CHANGE_MIN = 'CHANGE_MIN'
export const SET_TEXT = 'SET_TEXT'
export const SET_BUTTON = 'SET_BUTTON'

export const addValueAC = () => {    /*  5  */
    return {
        type: ADD_VALUE
    } as const
}
export const resetValueAC = () => {
    return {
        type: RESET_VALUE
    } as const
}

export const changeMaxAC = (newValue: number) => {
    return {
        type: CHANGE_MAX, newValue
    } as const
}
export const changeMinAC = (newValue: number) => {
    return {
        type: CHANGE_MIN, newValue
    } as const
}
export const setValueAC = (newValue: number) => {
    return {
        type: SET_VALUE, newValue
    } as const
}
export const setTextAC = (text: boolean) => {
    return {
        type: SET_TEXT, text
    } as const
}
export const setButtonAC = (button: boolean) => {
    return {
        type: SET_BUTTON, button
    } as const
}

