import React from "react";
import style from './TheFirstCounter.module.css'
import {ButtonTheFirstCounter} from "./ButtonTheFirstCounter";
import {WindowTheFirstCounter} from "./WindowTheFirstCounter";

type TheFirstCounterPropsType = {
    value: number
    setValue: (value: number) => void
    max: number
    min: number
    text: boolean
    setButton: (button: boolean) => void
    setText: (text: boolean) => void


}
export const TheFirstCounter = (props: TheFirstCounterPropsType) => {
    return (
        <div className={style.screenTheFirstCounter}>
            <div className={style.screenValue}>
                <WindowTheFirstCounter value={props.value}
                                       max={props.max}
                                       text={props.text}/>
            </div>
            <div className={style.buttonFirst}>
                <ButtonTheFirstCounter value={props.value}
                                       setValue={props.setValue}
                                       min={props.min}
                                       max={props.max}
                                       setButton={props.setButton}
                                       setText={props.setText}/>
            </div>
        </div>
    )
}