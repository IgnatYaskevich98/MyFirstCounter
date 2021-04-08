import React from "react";
import style from './TheSecondCounter.module.css'
import {InputTheSecondCounter} from "./InputsTheSecondCounter";
import {ButtonTheSecondCounter} from "./ButtonTheSecondCounter";


export const TheSecondСounter = () => {
    return (
        <div className={style.screenTheSecondCounter}>
            <div className={style.screenInputs}>
                <InputTheSecondCounter/>
            </div>
            <div className={style.screenButton}>
                <ButtonTheSecondCounter/>
            </div>

        </div>
    )
}