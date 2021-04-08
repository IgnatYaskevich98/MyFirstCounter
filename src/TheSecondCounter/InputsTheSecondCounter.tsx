import React, {ChangeEvent} from "react";
import style from './TheSecondCounter.module.css'


type InputTheSecondCounterPropsType = {
    max: number
    min: number
    setMax: (value: number) => void
    setMin: (value: number) => void
}

export const InputTheSecondCounter = (props: InputTheSecondCounterPropsType) => {
    let changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.setMax(value)
    }
    let changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.setMin(value)
    }
    let error = props.min === props.max || props.max < 0 || props.min < 0 || props.max < props.min
    if (error){

    }
    return (
        <div className={style.inputs}>
            <div>Max</div>
            <input type="number"
                   value={props.max}
                   onChange={changeMax}/>
            <div>Min</div>
            <input type="number"
                   value={props.min}
                   onChange={changeMin}/>
        </div>
    )
}