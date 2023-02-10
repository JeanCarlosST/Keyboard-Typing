import Keyboard from "../components/Keyboard/Keyboard"
import Navbar from "../components/Navbar/Navbar";
import TargetText from "../components/TargetText/TargetText";
import styles from "./Home.module.css";

const Home = () => {

    return (
        <>
            <Navbar/>
            <main>
                <TargetText />
                <Keyboard />
            </main>
        </>
    );
}

export default Home;