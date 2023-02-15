import { FaKeyboard } from "react-icons/fa";
import KeyboardStyleDropdown from "../KeyboardStyleDropdown/KeyboardStyleDropdown";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.name}>
                <FaKeyboard/>
                <span>Keyboard Typing</span>
            </div>
            
            <KeyboardStyleDropdown />
        </nav>
    )
}

export default Navbar;