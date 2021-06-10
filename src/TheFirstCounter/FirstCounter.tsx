import React from "react";
import style from './TheFirstCounter.module.css'
import {addValueAC, resetValueAC, setButtonAC, setTextAC} from "../redux-store/counter_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux-store/redux_store";

type TheFirstCounterPropsType = {
    firstDisabled: boolean
    setFirstDisabled: (value: boolean) => void
    setSecondDisabled: (value: boolean) => void
}
export const FirstCounter = React.memo((props: TheFirstCounterPropsType) => {

    const {max, text, value} = useSelector((state: AppStateType) => state.count)

    const dispatch = useDispatch()
    let onClick = () => {
        dispatch(addValueAC())
        max - 1 <= value ? props.setFirstDisabled(true) : props.setFirstDisabled(false)
    }
    let resetClick = () => {
        dispatch(resetValueAC())
        dispatch(setButtonAC(false))
        dispatch(setTextAC(true))
        props.setFirstDisabled(true)
        props.setSecondDisabled(false)
    }

    return (
        <div className={style.screenTheFirstCounter}>
            <div className={style.screenValue}>
                <div className={style.windowTheFirst}>
                    <div className={value >= max && value !== 0 ? style.valueRed : ''}>
                        {text ? <h1>SET VALUE</h1> : <h1>{value}</h1>}
                    </div>
                </div>
            </div>
            <div className={style.buttonFirst}>
                <div className={style.buttonFirst}>
                    <div>
                        <button onClick={onClick} disabled={props.firstDisabled}>inc</button>
                        <button onClick={resetClick} disabled={value < 1}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
})