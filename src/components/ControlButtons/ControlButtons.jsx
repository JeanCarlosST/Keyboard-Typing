import { useDispatch, useSelector } from "react-redux";
import { finishCountDownThunk, retryThunk, selectStatus } from "../../store/countDownSlice";
import { getNewRandomQuoteThunk } from "../../store/textSlice";
import styles from './ControlButtons.module.css'

const ControlButtons = () => {
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

    const handleStopRetryClick = () => {
        if(countDownStatus === "running") { // Stop
            dispatch(finishCountDownThunk());
        }
        else if(countDownStatus === "finished") { // Retry
            dispatch(retryThunk());
        }
    }

    const handleTryOtherButton = () => {
        dispatch(retryThunk());
        dispatch(getNewRandomQuoteThunk());
    };

    return (
        <div>
            <button 
                type="button" 
                className={`${styles.stopRetryButton} ${buttonStyle}`}
                onClick={handleStopRetryClick}>
                {buttonText}
            </button>
            {
                countDownStatus !== "running" &&
                <button
                    type="button"
                    className={styles.tryOtherQuoteButton}
                    onClick={handleTryOtherButton}>
                    Try with other quote
                </button>
            }
        </div>
    )
};

export default ControlButtons;