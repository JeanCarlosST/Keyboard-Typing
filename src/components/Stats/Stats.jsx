import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count, countDownInitialState, finishCountDownThunk, selectCounter, selectStatus, setCountDownIntervalId } from "../../store/countDownSlice";
import { selectPortions, selectCorrectCharacters } from '../../store/textSlice';
import { formatTimerNumber } from "../../utils";
import styles from "./Stats.module.css";

const Stats = () => {
    const counter = useSelector(selectCounter);
    const countDownStatus = useSelector(selectStatus);
    const portions = useSelector(selectPortions);
    const matchedCharactersAmount = useSelector(selectCorrectCharacters);

    const dispatch = useDispatch();

    const startCountDown = () => {
        const intervalId = setInterval(() => {
            dispatch(count());
        }, 1000);

        dispatch(setCountDownIntervalId(intervalId));
    }

    const getMinutes = () => {
        return formatTimerNumber(Math.floor(counter / 60));
    }

    const getSeconds = () => {
        return formatTimerNumber(Math.floor(counter % 60));
    }

    const getTypeSpeed = () => {
        let timePassed = countDownInitialState.counter - counter;

        if(timePassed === 0)
            timePassed = 1;

        timePassed /= 60;

        const speed = matchedCharactersAmount / timePassed;

        return Math.floor(speed);
    }

    if(countDownStatus === "not_started" && portions.length > 1) {
        startCountDown();
    }
    else if(counter <= 0) {
        dispatch(finishCountDownThunk());
    }

    return (
        <div className={styles.stats}>
            <div className={styles.counter}>
                {`${getMinutes()}:${getSeconds()}`}
            </div>
            <div className={styles.typeSpeed}>
                {getTypeSpeed()} cpm
            </div>
        </div>
    )
};

export default Stats;