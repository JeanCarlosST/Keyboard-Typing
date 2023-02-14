import Keyboard from "../components/Keyboard/Keyboard"
import Navbar from "../components/Navbar/Navbar";
import Stats from "../components/Stats/Stats";
import TargetText from "../components/TargetText/TargetText";
import ControlButtons from "../components/ControlButtons/ControlButtons";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Navbar/>
            <main>
                <TargetText />
                <Stats />
                <Keyboard />
                <ControlButtons />
                <Scoreboard />
            </main>
        </>
    );
}

export default Home;