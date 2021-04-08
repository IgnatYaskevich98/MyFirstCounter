import React from "react";
import style from './TheFirstCounter.module.css'

type WindowTheFirstCounterPropsType = {
    value: number
}

export const WindowTheFirstCounter = (props: WindowTheFirstCounterPropsType) => {

    return (
        <div className={style.windowTheFirst}>
            <div className={props.value >= 5 ? style.valueRed : ''}>{props.value}</div>
        </div>
    )
}