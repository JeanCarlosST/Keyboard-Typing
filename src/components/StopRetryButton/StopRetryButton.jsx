import { useDispatch, useSelector } from "react-redux";
import { finishCountDownThunk, restartCountDown, selectStatus } from "../../store/countDownSlice";
import { clearAllKeys } from "../../store/pressedKeysSlice";
import { clearCurrentScore } from "../../store/scoreSlice";
import { reset as resetText } from "../../store/textSlice";
import styles from './StopRetryButton.module.css'

const StopRetryButton = () => {
    const dispatch = useDispatch();
    const countDownStatus = useSelector(selectStatus);
    let buttonStyle = styles.retry;
    let buttonText = "Retry";

    if(countDownStatus === "running") {
        buttonStyle = styles.stop;
        buttonText = "Stop";
    }
    else if(countDownStatus === "not_started")
        buttonStyle = styles.notStarted;

    const handleClick = () => {
        if(countDownStatus === "running") { // Stop
            dispatch(finishCountDownThunk());
        }
        else if(countDownStatus === "finished") { // Retry
            dispatch(restartCountDown());
            dispatch(resetText());
            dispatch(clearAllKeys());
            dispatch(clearCurrentScore());
        }
    }

    return (
        <button 
            type="button" 
            className={`${styles.stopRetryButton} ${buttonStyle}`}
            onClick={handleClick}>
            {buttonText}
        </button>
    )
};

export default StopRetryButton;