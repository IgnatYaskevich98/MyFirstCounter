import React from "react";
import style from './TheFirstCounter.module.css'
import {ButtonTheFirstCounter} from "./ButtonTheFirstCounter";
import {WindowTheFirstCounter} from "./WindowTheFirstCounter";

type TheFirstCounterPropsType ={
    value: number
    setValue: (value: number)=>void
}
export const TheFirstCounter = (props: TheFirstCounterPropsType) => {
    return (
        <div className={style.screenTheFirstCounter}>
            <div className={style.screenValue}>
                <WindowTheFirstCounter value={props.value}/>
            </div>
            <div className={style.buttonFirst}>
                <ButtonTheFirstCounter value={props.value} setValue={props.setValue}/>
            </div>
        </div>
    )
}