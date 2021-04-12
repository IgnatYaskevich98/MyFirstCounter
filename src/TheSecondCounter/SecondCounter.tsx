import React, {ChangeEvent} from "react";
import style from './TheSecondCounter.module.css'
import {changeMaxAC, changeMinAC, setButtonAC, setTextAC, setValueAC} from "../redux-store/counter_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux-store/redux_store";

type TheSecondCounterPropsType = {
    firstDisabled: boolean
    setFirstDisabled: (value: boolean) => void
    secondDisabled: boolean
    setSecondDisabled: (value: boolean) => void
    // setMax: (value: number) => void
    // setMin: (value: number) => void
    //   value: number
    //  setValue: (value: number) => void
    // setText: (text: boolean) => void
    // setButton: (button: boolean) => void
    // max: number
    // min: number
    // text: boolean
    // button: boolean
    // dispatch: (dispatch: any) => void

}

export const SecondCounter = (props: TheSecondCounterPropsType) => {

    const {max, min} = useSelector((state: AppStateType) => state.count)
    const dispatch = useDispatch()

    let changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(changeMaxAC(value))
        // props.setMax(value)
    }
    let changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(changeMinAC(value))
        // props.setMin(value)
    }
    // let err = props.min === props.max || props.max < 0 || props.min < 0 || props.max < props.min

    let setValueClick = () => {
        if (max > min) {
            dispatch(setTextAC(true))
            dispatch(setValueAC(min))
            dispatch(setButtonAC(false))
            props.setFirstDisabled(false)
            props.setSecondDisabled(true)
        }
    }
    let error = min === max || max < 0 || min < 0 || max < min
    // let disabled1 = min === max || min < 0 || max < 0
    return (
        <div className={style.screenTheSecondCounter}>
            <div className={style.screenInputs}>
                <div className={style.inputs}>
                    <div>Max</div>
                    <input type="number"
                           value={max}
                           onChange={changeMax}/>
                    <div>Min</div>
                    <input type="number"
                           value={min}
                           onChange={changeMin}/>
                </div>
            </div>
            <div className={style.screenButton}>
                <div>
                    <button className={error ? style.redError : ''}
                            onClick={setValueClick} disabled={props.secondDisabled}>set value
                    </button>
                </div>
            </div>

        </div>
    )
}