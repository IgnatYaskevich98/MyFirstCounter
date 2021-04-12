import React, {ChangeEvent} from "react";
import style from './TheSecondCounter.module.css'
import {changeMaxAC, changeMinAC, setButtonAC, setTextAC, setValueAC} from "../redux-store/counter_reducer";

type TheSecondCounterPropsType = {
    // setMax: (value: number) => void
    // setMin: (value: number) => void
    //   value: number
    //  setValue: (value: number) => void
    // setText: (text: boolean) => void
    // setButton: (button: boolean) => void
    max: number
    min: number
    text: boolean
    button: boolean
    dispatch: (dispatch: any) => void

}

export const SecondCounter = (props: TheSecondCounterPropsType) => {

    let changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.dispatch(changeMaxAC(value))
        // props.setMax(value)
    }
    let changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.dispatch(changeMinAC(value))
        // props.setMin(value)
    }
    // let err = props.min === props.max || props.max < 0 || props.min < 0 || props.max < props.min

    let setValueClick = () => {
        if (props.max > props.min) {
            props.dispatch(setTextAC(true))
            props.dispatch(setValueAC(props.min))
            props.dispatch(setButtonAC(false))
        }
    }
    let error = props.min === props.max || props.max < 0 || props.min < 0 || props.max < props.min
    let disabled = props.min === props.max || props.min < 0 || props.max < 0
    return (
        <div className={style.screenTheSecondCounter}>
            <div className={style.screenInputs}>
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
            </div>
            <div className={style.screenButton}>
                <div>
                    <button className={error ? style.error : ''}
                            onClick={setValueClick} disabled={disabled}>set value
                    </button>
                </div>
            </div>

        </div>
    )
}