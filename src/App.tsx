import React, {useState} from 'react';
import './App.css';
import style from './Style.module.css'
import {FirstCounter} from "./TheFirstCounter/FirstCounter";
import {SecondCounter} from "./TheSecondCounter/SecondCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux-store/redux_store";


function App() {
    // let [value, setValue] = useState(0);
    // let [max, setMax] = useState(0)
    // let [min, setMin] = useState(0)
    // let [text, setText] = useState(true)
    // let [button, setButton] = useState(false)


    const value1 = useSelector<AppStateType, number>((state) => state.count.startValue)
    // useSelector(принимает тип редакса и тип возварщаемого значеня)

    // const maxValue = useSelector<AppStateType, number>((state) => state.count.max)
    // const minValue = useSelector<AppStateType, number>((state) => state.count.min)
    // const newText = useSelector<AppStateType, boolean>((state) => state.count.text)
    // const newButton = useSelector<AppStateType, boolean>((state) => state.count.button)
    const {max, min, button, text} = useSelector((state: AppStateType) => state.count)
    const dispatch = useDispatch()       //   инкрементит REDUCER

    const [firstDisabled, setFirstDisabled] = useState(true)
    const [secondDisabled, setSecondDisabled] = useState(false)

    return (
        <div className={style.app}>
            <div className={style.counters}>
                <FirstCounter
                    firstDisabled={firstDisabled}
                    setFirstDisabled={setFirstDisabled}
                    setSecondDisabled={setSecondDisabled}
                    // value={value}
                    // setValue={setValue}
                    // min={min}
                    // max={max}
                    // text={text}
                    // setText={setText}
                    // dispatch={dispatch}
                    // startValue={value1}
                    // button ={button}

                />
            </div>
            <div className={style.counters}>
                <SecondCounter
                    firstDisabled={firstDisabled}
                    setFirstDisabled={setFirstDisabled}
                    secondDisabled={secondDisabled}
                    setSecondDisabled={setSecondDisabled}

                    //  dispatch={dispatch}
                    //   max={max}
                    // min={min}
                    // setMax={setMax}
                    // setMin={setMin}
                    // value={value}
                    // setValue={setValue}
                    // text={text}
                    // setText={setText}
                    //button={button}
                    // setButton={setButton}
                    //   dispatch={dispatch}

                />
            </div>
        </div>
    );
}

export default App;
