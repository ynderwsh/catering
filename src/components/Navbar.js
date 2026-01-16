import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.burger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Главная</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>Салат в рулете</Link>
        <Link to="/kanape" onClick={() => setIsOpen(false)}>Канапе</Link>
      </div>
    </nav>
  );
}

export default Navbar;