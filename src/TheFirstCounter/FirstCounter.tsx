import React from "react";
import style from './TheFirstCounter.module.css'
import {addValueAC, resetValueAC, setButtonAC, setTextAC} from "../redux-store/counter_reducer";

type TheFirstCounterPropsType = {
    // value: number
    //  setValue: (value: number) => void
    // setButton: (button: boolean) => void
    // setText: (text: boolean) => void
    max: number
    min: number
    text: boolean
    dispatch: (dispatch: any) => void
    startValue: number
    button: boolean
}
export const FirstCounter = (props: TheFirstCounterPropsType) => {

    let onClick = () => {
        debugger
        // let addValue = props.min <= props.value ? props.setValue((props.value + 1)) : '';
        props.dispatch(addValueAC())
    }
    let resetClick = () => {
        // props.setValue(0)
        props.dispatch(resetValueAC())
        props.dispatch(setButtonAC(false))
        props.dispatch(setTextAC(true))
    }

    return (
        <div className={style.screenTheFirstCounter}>
            <div className={style.screenValue}>
                <div className={style.windowTheFirst}>
                    <div className={props.startValue >= props.max && props.startValue !== 0 ? style.valueRed : ''}>
                        {props.text ? <h1>SET VALUE</h1> : <h1>{props.startValue}</h1>}
                    </div>
                </div>
            </div>
            <div className={style.buttonFirst}>
                <div className={style.buttonFirst}>
                    <div>
                        <button onClick={onClick} disabled={props.startValue >= props.max}>inc</button>
                        <button onClick={resetClick} disabled={props.startValue < 1 }>reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}