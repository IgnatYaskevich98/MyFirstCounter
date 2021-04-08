import React from "react";
import style from './TheSecondCounter.module.css'
import {InputTheSecondCounter} from "./InputsTheSecondCounter";
import {ButtonTheSecondCounter} from "./ButtonTheSecondCounter";

type TheSecondCounterPropsType = {
    max: number
    min: number
    setMax: (value: number) => void
    setMin: (value: number) => void
    value: number
    setValue: (value: number) => void
    text: boolean
    setText: (text: boolean) => void
    button: boolean
    setButton: (button: boolean) => void
}

export const TheSecondСounter = (props: TheSecondCounterPropsType) => {
    return (
        <div className={style.screenTheSecondCounter}>
            <div className={style.screenInputs}>
                <InputTheSecondCounter min={props.min}
                                       max={props.max}
                                       setMax={props.setMax}
                                       setMin={props.setMin}
                />
            </div>
            <div className={style.screenButton}>
                <ButtonTheSecondCounter max={props.max}
                                        min={props.min}
                                        value={props.value}
                                        setValue={props.setValue}
                                        button={props.button}
                                        setText={props.setText}
                                        setButton={props.setButton}
                />
            </div>

        </div>
    )
}