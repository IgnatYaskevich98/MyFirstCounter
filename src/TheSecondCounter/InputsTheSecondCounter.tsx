import React from "react";
import style from './TheSecondCounter.module.css'

export const InputTheSecondCounter = () => {
    return (
        <div className={style.inputs}>
            <div>Max</div>
            <input type="number"/>
            <div>Min</div>
            <input type="number"/>
        </div>
    )
}