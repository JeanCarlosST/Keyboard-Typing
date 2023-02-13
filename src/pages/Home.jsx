import Keyboard from "../components/Keyboard/Keyboard"
import Navbar from "../components/Navbar/Navbar";
import Stats from "../components/Stats/Stats";
import TargetText from "../components/TargetText/TargetText";
import styles from "./Home.module.css";

const Home = () => {

    return (
        <>
            <Navbar/>
            <main>
                <TargetText />
                <Stats />
                <Keyboard />
            </main>
        </>
    );
}

export default Home;