import React from "react";
import style from './TheFirstCounter.module.css'

type ButtonTheFirstCounterPropsType = {
    value: number
    setValue: (value: number) => void
    min: number
    max: number
    setButton: (button: boolean) => void
    setText: (text: boolean) => void

}

export const ButtonTheFirstCounter = (props: ButtonTheFirstCounterPropsType) => {
    let oncClick = () => {
        let addValue = props.min <= props.value ? props.setValue((props.value + 1)) : '';
    }
    let resetClick = () => {
        props.setValue(0)
        props.setButton(false)
        props.setText(true)

    }
    return (
        <div className={style.buttonFirst}>
            <div>
                <button onClick={oncClick} disabled={props.value >= props.max}>inc</button>
                <button onClick={resetClick} disabled={props.value < 1}>reset</button>
            </div>
        </div>
    )
}