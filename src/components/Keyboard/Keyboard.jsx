import KeysData from "../../data/Keys";
import Key from "../Key/Key";
import styles from "./Keyboard.module.css";

const Keyboard = () => {
    const firstRow = KeysData.slice(0, 14);
    const secondRow = KeysData.slice(14, 28);
    const thirdRow = KeysData.slice(28, 41);
    const fourthRow = KeysData.slice(41, KeysData.length - 1);
    const fifthRow = KeysData.slice(-1);

    return (
        <div className={styles.keyboard}>
            <div className={`${styles.keyboard_row} ${styles.row_1}`}>
                {firstRow.map((key, index) => 
                    <Key keyItem={key} key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_2}`}>
                {secondRow.map((key, index) => 
                    <Key keyItem={key} key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_3}`}>
                {thirdRow.map((key, index) => 
                    <Key keyItem={key} key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_4}`}>
                {fourthRow.map((key, index) => 
                    <Key keyItem={key} key={index}/>)}
            </div>
            <div className={`${styles.keyboard_row} ${styles.row_5}`}>
                {fifthRow.map((key, index) => 
                    <Key keyItem={key} key={index}/>)}
            </div>
        </div>
    )
}

export default Keyboard