import { useSelector } from "react-redux";
import { selectHighScores } from "../../store/scoreSlice";
import styles from "./Scoreboard.module.css";

const Scoreboard = () => {
    const scores = useSelector(selectHighScores);

    if(scores.length === 0)
        return <></>

    return (
        <div className={styles.scoreboardContainer}>
            <h3>Scoreboard</h3>
            <table className={styles.scoreboard}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Speed</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) =>
                        <tr key={index}>
                            <td>#{index + 1}</td>
                            <td>{score} cpm</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default Scoreboard;