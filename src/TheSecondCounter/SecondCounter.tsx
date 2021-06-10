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
}

export const SecondCounter = React.memo((props: TheSecondCounterPropsType) => {

    const {max, min} = useSelector((state: AppStateType) => state.count)
    const dispatch = useDispatch()

    let changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(changeMaxAC(value))

    }
    let changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        dispatch(changeMinAC(value))
    }
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
})