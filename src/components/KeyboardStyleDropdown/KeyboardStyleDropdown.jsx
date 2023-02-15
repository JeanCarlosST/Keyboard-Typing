import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyboardStyles } from "../../data/keyboardStyles";
import { changeStyle, selectStyle } from "../../store/keyboardStyleSlice";
import { FaAngleDown } from "react-icons/fa";
import styles from "./KeyboardStyleDropdown.module.css";

const KeyboardStyleDropdown = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const currentKeyboardStyle = useSelector(selectStyle);

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    const handleItemClick = (style) => {
        dispatch(changeStyle(style));
        setOpen(false);
    }

    console.log(keyboardStyles);

    return (
        <div className={styles.dropdown_container}>
            <span>Style: </span>
            <button type="button" className={styles.dropdown_button} onClick={handleOpen}>
                <span>{currentKeyboardStyle.name}</span>
                <FaAngleDown className={open ? styles.iconUp : styles.iconDown}/>
            </button>
            <div className={`${styles.dropdown} ${open ? styles.active : styles.inactive}`}>
                <ul>
                    {keyboardStyles.map((style, index) => 
                        <StyleDropdownItem 
                            keyboardStyle={style} 
                            onClick={() => handleItemClick(style)}
                            key={index}/>)}
                </ul>
            </div>
        </div>
    )
};

const StyleDropdownItem = ({keyboardStyle, onClick}) => {
    return (
        <li onClick={onClick}>
            <button 
                type="button" 
                className={`${keyboardStyle.style} ${styles.preview}`}>
                A
            </button>
            <span>{keyboardStyle.name}</span>
        </li>
    )
}

export default KeyboardStyleDropdown;