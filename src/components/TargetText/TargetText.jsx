import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTargetText, selectTargetText } from '../../store/targetTextSlice';
import styles from "./TargetText.module.css";

const TargetText = () => {
    const dispatch = useDispatch();
    const targetText = useSelector(selectTargetText);

    const getRandomQuote = async () => {
        const response = await fetch("https://api.quotable.io/random?minLength=200");
        if(response.ok) {
            const json = await response.json();
            dispatch(setTargetText(json.content));
        } else {
        }
    }

    useEffect(() => {
        getRandomQuote();
    }, [])

    return (
        <div className={styles.targetText}>
            <p>{targetText}</p>
        </div>
    );
}

export default TargetText;