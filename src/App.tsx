import React, {useState} from 'react';
import './App.css';
import style from './Style.module.css'
import {FirstCounter} from "./TheFirstCounter/FirstCounter";
import {SecondCounter} from "./TheSecondCounter/SecondCounter";


export const App = React.memo(() => {
    const [firstDisabled, setFirstDisabled] = useState(true)
    const [secondDisabled, setSecondDisabled] = useState(false)

    return (
        <div className={style.app}>
            <div className={style.counters}>
                <FirstCounter
                    firstDisabled={firstDisabled}
                    setFirstDisabled={setFirstDisabled}
                    setSecondDisabled={setSecondDisabled}
                />
            </div>
            <div className={style.counters}>
                <SecondCounter
                    firstDisabled={firstDisabled}
                    setFirstDisabled={setFirstDisabled}
                    secondDisabled={secondDisabled}
                    setSecondDisabled={setSecondDisabled}
                />
            </div>
        </div>
    );
})

