import React, {useState} from 'react';
import './App.css';
import style from './Style.module.css'
import {TheFirstCounter} from "./TheFirstCounter/TheFirstCounter";
import {TheSecondСounter} from "./TheSecondCounter/TheSecondCounter";


function App() {
    let [value, setValue] = useState(0);
    return (
        <div className={style.app}>
            <div className={style.counters}>
                <TheFirstCounter value={value} setValue={setValue}/>
            </div>
            <div className={style.counters}>
                <TheSecondСounter/>
            </div>
        </div>
    );
}

export default App;
