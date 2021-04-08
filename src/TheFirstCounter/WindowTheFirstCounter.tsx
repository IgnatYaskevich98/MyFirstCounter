import React from "react";
import style from './TheFirstCounter.module.css'

type WindowTheFirstCounterPropsType = {
    value: number
    max: number
    text: boolean
}

export const WindowTheFirstCounter = (props: WindowTheFirstCounterPropsType) => {

    return (
        <div className={style.windowTheFirst}>
            <div className={props.value >= props.max && props.value !== 0 ? style.valueRed : ''}>
                {props.text ? <h1>SET VALUE</h1> : <h1>{props.value}</h1>}
            </div>
        </div>
    )
}