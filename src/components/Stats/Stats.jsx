import { useState } from "react";
import styles from "./Stats.module.css";

const Stats = () => {
    const countDownInitialTime = 120; // 2min
    let intervalId;
    let counter = countDownInitialTime;
    
    const formatNumber = (num) => {
        return num.toString().padStart(2, "0");
    }

    const [minutes, setMinutes] = useState(formatNumber(countDownInitialTime / 60));
    const [seconds, setSeconds] = useState(formatNumber(countDownInitialTime % 60));

    const startCountDown = () => {
        intervalId = setInterval(() => {
            counter--;
            setMinutes(formatNumber(Math.floor(counter / 60)));
            setSeconds(formatNumber(Math.floor(counter % 60)));

            if(counter <= 0 && intervalId) {
                clearInterval(intervalId)
            }
        }, 1000);
        console.log(intervalId);
    }

    return (
        <div className={styles.stats}>
            <div className={styles.counter}>
                {`${minutes}:${seconds}`}
            </div>
            <div className={styles.typeSpeed}>
                0 cpm
            </div>
        </div>
    )
};

export default Stats;