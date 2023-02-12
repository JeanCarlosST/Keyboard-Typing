import { useState } from "react";
import KeysData from "../../data/Keys";
import Key from "../Key/Key";
import { addKey, removeKey, selectPressedKeys } from '../../store/pressedKeysSlice'
import { selectShift, activate, deactivate } from '../../store/shiftSlice'
import { toggle, selectCapsLock } from '../../store/capsLockSlice'
import styles from "./Keyboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Modifiers } from "../../data/Key";

const Keyboard = () => {
    const firstRow = KeysData.slice(0, 14);
    const secondRow = KeysData.slice(14, 28);
    const thirdRow = KeysData.slice(28, 41);
    const fourthRow = KeysData.slice(41, KeysData.length - 1);
    const fifthRow = KeysData.slice(-1);

    const pressedKeys = useSelector(selectPressedKeys);
    const isShiftDown = useSelector(selectShift);
    const isCapsLockEnable = useSelector(selectCapsLock)
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        if(e.code.includes("Shift") && !isShiftDown)
            dispatch(activate());
        else if(e.code === Modifiers.CapsLock) 
            dispatch(toggle())
        else if(e.code !== Modifiers.Tab)
            dispatch(addKey(e.code));
    };

    const handleKeyUp = (e) => {
        if(e.code.includes("Shift") && isShiftDown)
            dispatch(deactivate());
        else
            dispatch(removeKey(e.code));
    }

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    return (
        <div className={styles.keyboard}>
            <div className={`${styles.keyboard_row} ${styles.row_1}`}>
                {firstRow.map((key, index) => 
                    <Key 
                        keyItem={key} 
                        pressedKeys={pressedKeys} 
                        isShiftDown={isShiftDown} 
                        isCapsLockEnable={isCapsLockEnable}
                        key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_2}`}>
                {secondRow.map((key, index) => 
                    <Key 
                        keyItem={key} 
                        pressedKeys={pressedKeys} 
                        isShiftDown={isShiftDown} 
                        isCapsLockEnable={isCapsLockEnable}
                        key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_3}`}>
                {thirdRow.map((key, index) => 
                    <Key 
                        keyItem={key} 
                        pressedKeys={pressedKeys} 
                        isShiftDown={isShiftDown} 
                        isCapsLockEnable={isCapsLockEnable}
                        key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_4}`}>
                {fourthRow.map((key, index) => 
                    <Key 
                        keyItem={key} 
                        pressedKeys={pressedKeys} 
                        isShiftDown={isShiftDown} 
                        isCapsLockEnable={isCapsLockEnable}
                        key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_5}`}>
                {fifthRow.map((key, index) => 
                    <Key 
                        keyItem={key} 
                        pressedKeys={pressedKeys} 
                        isShiftDown={isShiftDown} 
                        isCapsLockEnable={isCapsLockEnable}
                        key={index}/>)}
            </div>
        </div>
    )
}

export default Keyboard