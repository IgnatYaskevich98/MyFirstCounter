import React, {useState} from "react";
import style from './TheFirstCounter.module.css'
import {addValueAC, resetValueAC, setButtonAC, setTextAC} from "../redux-store/counter_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux-store/redux_store";

type TheFirstCounterPropsType = {
    firstDisabled: boolean
    setFirstDisabled: (value: boolean) => void
    setSecondDisabled: (value: boolean) => void
    // value: number
    //  setValue: (value: number) => void
    // setButton: (button: boolean) => void
    // setText: (text: boolean) => void
    // max: number
    // min: number
    // text: boolean
    // dispatch: (dispatch: any) => void
    // startValue: number
    // button: boolean
}
export const FirstCounter = (props: TheFirstCounterPropsType) => {

    const {max, text, startValue} = useSelector((state: AppStateType) => state.count)

    const dispatch = useDispatch()
    let onClick = () => {
        debugger
        // let addValue = props.min <= props.value ? props.setValue((props.value + 1)) : '';
        dispatch(addValueAC())
        max - 1 <= startValue ? props.setFirstDisabled(true) : props.setFirstDisabled(false)

    }
    let resetClick = () => {
        // props.setValue(0)
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
                    <div className={startValue >= max && startValue !== 0 ? style.valueRed : ''}>
                        {text ? <h1>SET VALUE</h1> : <h1>{startValue}</h1>}
                    </div>
                </div>
            </div>
            <div className={style.buttonFirst}>
                <div className={style.buttonFirst}>
                    <div>
                        <button onClick={onClick} disabled={props.firstDisabled}>inc</button>
                        <button onClick={resetClick} disabled={startValue < 1}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}