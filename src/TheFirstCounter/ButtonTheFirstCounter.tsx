import React from "react";
import style from './TheFirstCounter.module.css'

type ButtonTheFirstCounterPropsType = {
    value: number
    setValue: (value: number) => void
}

export const ButtonTheFirstCounter = (props: ButtonTheFirstCounterPropsType) => {
    let oncClick = () => {
        let addValue = props.value <= 4 ? props.setValue((props.value + 1)) : ''
    }
    let resetClick = () => {
        props.setValue(0)
    }
    return (
        <div className={style.buttonFirst}>
            <div>
                <button onClick={oncClick} disabled={props.value >= 5}>inc</button>
                <button onClick={resetClick} disabled={props.value < 1}>reset</button>
            </div>
        </div>
    )
}