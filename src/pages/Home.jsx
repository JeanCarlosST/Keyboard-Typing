import Keyboard from "../components/Keyboard/Keyboard"
import Navbar from "../components/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {

    return (
        <>
            <Navbar/>
            <main>
                <Keyboard />
            </main>
        </>
    );
}

export default Home;