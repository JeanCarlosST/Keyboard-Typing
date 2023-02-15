import styles from "./Key.module.css";
import keyboardStyles from "../../data/keyboardStyles.module.css";
import { Modifiers } from "../../data/Key";
import { emptyCharacter } from "../../utils";

const Key = ({ keyItem, style, pressedKeys, isShiftDown, isCapsLockEnable }) => {
    let pressedClass = "";

    const isAlphaAndPressed = keyItem.isAlpha && pressedKeys.includes(keyItem.code);
    const isModifierAndPressed = keyItem.isModifier && pressedKeys.includes(keyItem.code);
    const isThisShiftDown = isShiftDown && keyItem.code.includes("Shift");
    const isThisCapsLockEnable = isCapsLockEnable && keyItem.modifier === Modifiers.CapsLock;

    if(isAlphaAndPressed || isModifierAndPressed || isThisShiftDown || isThisCapsLockEnable) {
        pressedClass = keyboardStyles.pressed;
    }
        
    let value;

    if(keyItem.code === "Space") {
        value = emptyCharacter;
    }
    else if(keyItem.isAlpha) {
        value = keyItem.currentValue(isShiftDown, isCapsLockEnable);
    }
    else if(keyItem.code.includes("Shift"))
        value = "Shift";
    else {
        value = keyItem.modifier;
    }
    
    return (
        <button 
            type="button" 
            className={`${styles.key} ${style.style} ${keyItem.value === " " ? styles.spacebar : ""} ${pressedClass}`}
            >
            {value}
        </button>
    );
}

export default Key;