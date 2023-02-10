import styles from "./Key.module.css";

const Key = ({ keyItem }) => {
    return (
        <div className={styles.key}>
            {keyItem.isAlpha ? keyItem.firstChar : keyItem.modifier}
        </div>
    );
}

export default Key;