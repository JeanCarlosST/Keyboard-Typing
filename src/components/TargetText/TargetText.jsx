import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPortions, getNewRandomQuoteThunk } from '../../store/textSlice';
import styles from "./TargetText.module.css";

const TargetText = () => {
    const dispatch = useDispatch();
    const portions = useSelector(selectPortions);

    useEffect(() => {
        dispatch(getNewRandomQuoteThunk());
    }, []);

    const coloredPortion = ({text, target, status}, key) => {
        let className = styles.uncompleted_text;

        if(status === "correct") 
            className = styles.correct_text;
        else if(status === "incorrect") 
            className = styles.incorrect_text;

        
        return (
            <span className={className} key={key}>
                {status !== "uncompleted" ? target : text}
            </span>
        )
    } 

    return (
        <code className={styles.targetText}>
            {portions.map((portion, index) => coloredPortion(portion, index))}
        </code>
    );
}

export default TargetText;