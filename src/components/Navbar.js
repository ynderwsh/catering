import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.burger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <Link to="/product-pages/Гендерный фуршет" onClick={() => setIsOpen(false)}>Гендерный фуршет</Link>
        <Link to="/product-pages/Новогодний сборник" onClick={() => setIsOpen(false)}>Новогодний сборник</Link>
        <Link to="/product-pages/Такос" onClick={() => setIsOpen(false)}>Такос</Link>
        <Link to="/product-pages/Мини шашлык" onClick={() => setIsOpen(false)}>Мини шашлык</Link>
        <Link to="/product-pages/Летний сборник" onClick={() => setIsOpen(false)}>Летний сборник</Link>
        <Link to="/product-pages/Детское меню" onClick={() => setIsOpen(false)}>Детское меню</Link>
        <Link to="/product-pages/Сладкие позиции" onClick={() => setIsOpen(false)}>Сладкие позиции</Link>
        <Link to="/product-pages/Сет Цезарь" onClick={() => setIsOpen(false)}>Сет Цезарь</Link>
        <Link to="/product-pages/Бранчи" onClick={() => setIsOpen(false)}>Бранчи</Link>
        <Link to="/product-pages/Горячие позиции" onClick={() => setIsOpen(false)}>Горячие позиции</Link>
        <Link to="/product-pages/Рулетики" onClick={() => setIsOpen(false)}>Рулетики</Link>
        <Link to="/product-pages/Канапе" onClick={() => setIsOpen(false)}>Канапе</Link>
        <Link to="/product-pages/Тарталетки" onClick={() => setIsOpen(false)}>Тарталетки</Link>
        <Link to="/product-pages/Брускеты и кростини" onClick={() => setIsOpen(false)}>Брускеты и кростини</Link>
        <Link to="/product-pages/Боксы" onClick={() => setIsOpen(false)}>Боксы</Link>
        <Link to="/product-pages/Салаты" onClick={() => setIsOpen(false)}>Салаты</Link>
        <Link to="/product-pages/Пирамидки" onClick={() => setIsOpen(false)}>Пирамидки</Link>
      </div>
    </nav>
  );
}

export default Navbar;