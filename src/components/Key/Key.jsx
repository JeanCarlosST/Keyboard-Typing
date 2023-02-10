import styles from "./Key.module.css";

const Key = ({ keyItem, pressedKey }) => {

    let pressedClass = "";

    if((keyItem.isAlpha && keyItem.firstChar === pressedKey) || 
        (keyItem.isModifier && keyItem.modifier === pressedKey))
        pressedClass = styles.pressed
        

    return (
        <div className={`${styles.key} ${pressedClass}`} onClick={() => console.log(keyItem.firstChar)}>
            <span>{keyItem.secondChar}</span>
            <span>{keyItem.isAlpha ? keyItem.firstChar : keyItem.modifier}</span>
        </div>
    );
}

export default Key;