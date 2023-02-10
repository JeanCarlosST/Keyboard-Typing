import { useEffect, useState } from "react";
import styles from "./TargetText.module.css";

const TargetText = () => {
    const [text, setText] = useState();

    const getRandomQuote = async () => {
        const response = await fetch("https://api.quotable.io/random?minLength=200");
        if(response.ok) {
            const json = await response.json();
            setText(json.content);
        } else {
            setText("Ups, there was an error");
        }
    }

    useEffect(() => {
        getRandomQuote();
    }, [])

    return (
        <div className={styles.targetText}>
            <p>{text}</p>
        </div>
    );
}

export default TargetText;