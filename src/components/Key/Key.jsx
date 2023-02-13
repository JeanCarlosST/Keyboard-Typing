import styles from "./Key.module.css";
import { Modifiers } from "../../data/Key";

const Key = ({ keyItem, pressedKeys, isShiftDown, isCapsLockEnable }) => {
    let pressedClass = "";

    const isAlphaAndPressed = keyItem.isAlpha && pressedKeys.includes(keyItem.code);
    const isModifierAndPressed = keyItem.isModifier && pressedKeys.includes(keyItem.code);
    const isThisShiftDown = isShiftDown && keyItem.code.includes("Shift");
    const isThisCapsLockEnable = isCapsLockEnable && keyItem.modifier === Modifiers.CapsLock;

    if(isAlphaAndPressed || isModifierAndPressed || isThisShiftDown || isThisCapsLockEnable) {
        pressedClass = styles.pressed;
    }
        
    let value;

    if(keyItem.isAlpha) {
        value = keyItem.currentValue(isShiftDown, isCapsLockEnable);
    }
    else if(keyItem.code.includes("Shift"))
        value = "Shift";
    else {
        value = keyItem.modifier;
    }

    return (
        <div className={`${styles.key} ${pressedClass}`}>
            <span>{value}</span>
        </div>
    );
}

export default Key;