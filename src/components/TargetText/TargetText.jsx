import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTargetText, selectPortions } from '../../store/textSlice';
import styles from "./TargetText.module.css";

const TargetText = () => {
    const dispatch = useDispatch();
    const portions = useSelector(selectPortions);

    const getRandomQuote = async () => {
        dispatch(setTargetText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra semper ipsum id cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer elementum nibh dui, nec suscipit dolor dapibus dapibus. Curabitur porttitor ut justo ut sagittis. Duis arcu neque, consectetur at nulla et, rutrum ultricies turpis. Donec lobortis justo ut ullamcorper luctus."))
        // const response = await fetch("https://api.quotable.io/random?minLength=200");
        // if(response.ok) {
        //     const json = await response.json();
        //     dispatch(setTargetText(json.content));
        // } else {
        // }
    }

    useEffect(() => {
        getRandomQuote();
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