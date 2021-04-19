import React, {useState} from 'react';
import './App.css';
import style from './Style.module.css'
import {FirstCounter} from "./TheFirstCounter/FirstCounter";
import {SecondCounter} from "./TheSecondCounter/SecondCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux-store/redux_store";


function App() {
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
