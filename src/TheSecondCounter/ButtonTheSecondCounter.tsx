import React from "react";
import style from './TheSecondCounter.module.css'
import {InputTheSecondCounter} from "./InputsTheSecondCounter";

type ButtonTheSecondCounterPropsType = {
    max: number
    min: number
    value: number
    setValue: (value: number) => void
    setText: (text: boolean) => void
    button: boolean
    setButton: (button: boolean) => void
}
export const ButtonTheSecondCounter = (props: ButtonTheSecondCounterPropsType) => {
    let setClick = () => {
        if (props.max > props.min) {
            props.setText(false)
            props.setValue(props.min)
            props.setButton(true)
        }
    }
    return (
        <div>
            <button onClick={setClick}>set value
            </button>
        </div>
    )
}