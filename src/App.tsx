import React, {useState} from 'react';
import './App.css';
import style from './Style.module.css'
import {TheFirstCounter} from "./TheFirstCounter/TheFirstCounter";
import {TheSecondСounter} from "./TheSecondCounter/TheSecondCounter";


function App() {
    let [value, setValue] = useState(0);
    let [max, setMax] = useState(0)
    let [min, setMin] = useState(0)
    let [text, setText] = useState(true)
    let [button, setButton] = useState(false)

    return (
        <div className={style.app}>
            <div className={style.counters}>
                <TheFirstCounter value={value}
                                 setValue={setValue}
                                 min={min}
                                 max={max}
                                 text={text}
                                 setButton={setButton}
                                 setText={setText}

                />
            </div>
            <div className={style.counters}>
                <TheSecondСounter max={max}
                                  setMax={setMax}
                                  min={min}
                                  setMin={setMin}
                                  value={value}
                                  setValue={setValue}
                                  text={text}
                                  setText={setText}
                                  button={button}
                                  setButton={setButton}

                />
            </div>
        </div>
    );
}

export default App;
