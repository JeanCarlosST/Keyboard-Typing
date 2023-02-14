import { useDispatch, useSelector } from "react-redux";
import { count, finishCountDownThunk, selectCounter, selectStatus, setCountDownIntervalId } from "../../store/countDownSlice";
import { selectCurrentSpeed, updateCurrentSpeedThunk } from "../../store/scoreSlice";
import { selectPortions, selectCorrectCharacters } from '../../store/textSlice';
import { formatTimerNumber } from "../../utils";
import styles from "./Stats.module.css";

const Stats = () => {
    const counter = useSelector(selectCounter);
    const countDownStatus = useSelector(selectStatus);
    const portions = useSelector(selectPortions);
    const matchedCharactersAmount = useSelector(selectCorrectCharacters);
    const currentSpeed = useSelector(selectCurrentSpeed);

    const dispatch = useDispatch();

    const startCountDown = () => {
        const intervalId = setInterval(() => {
            dispatch(count());
            dispatch(updateCurrentSpeedThunk());
        }, 1000);

        dispatch(setCountDownIntervalId(intervalId));
    }

    const getMinutes = () => {
        return formatTimerNumber(Math.floor(counter / 60));
    }

    const getSeconds = () => {
        return formatTimerNumber(Math.floor(counter % 60));
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
                {currentSpeed} cpm
            </div>
        </div>
    )
};

export default Stats;