import React from "react";
import style from './TheSecondCounter.module.css'

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
    let error = props.min === props.max || props.max < 0 || props.min < 0 || props.max < props.min
    let disabled = props.min === props.max || props.min < 0 || props.max < 0
    return (
        <div>
            <button className={error ? style.error : ''}
                    onClick={setClick} disabled={disabled}>set value
            </button>
        </div>
    )
}