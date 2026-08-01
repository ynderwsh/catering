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
        <Link to="/product-pages/Гендерный фуршет">Гендерный фуршет</Link>
        <Link to="/product-pages/Новогодний сборник">Новогодний сборник</Link>
        <Link to="/product-pages/Такос">Такос</Link>
        <Link to="/product-pages/Мини шашлык">Мини шашлык</Link>
        <Link to="/product-pages/Летний сборник">Летний сборник</Link>
        <Link to="/product-pages/Детское меню">Детское меню</Link>
        <Link to="/product-pages/Сладкие позиции">Сладкие позиции</Link>
        <Link to="/product-pages/Сет Цезарь">Сет Цезарь</Link>
        <Link to="/product-pages/Бранчи">Бранчи</Link>
        <Link to="/product-pages/Горячие позиции">Горячие позиции</Link>
        <Link to="/product-pages/Рулетики">Рулетики</Link>
        <Link to="/product-pages/Канапе">Канапе</Link>
        <Link to="/product-pages/Тарталетки">Тарталетки</Link>
        <Link to="/product-pages/Брускеты и кростини">Брускеты и кростини</Link>
        <Link to="/product-pages/Боксы">Боксы</Link>
        <Link to="/product-pages/Салаты">Салаты</Link>
        <Link to="/product-pages/Пирамидки">Пирамидки</Link>
      </div>
    </nav>
  );
}

export default Navbar;