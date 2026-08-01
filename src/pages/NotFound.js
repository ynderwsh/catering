import { Link } from "react-router-dom";
import styles from './NotFound.module.scss'; // можно создать для стилей

function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1>404 — Страница не найдена</h1>
      <p>Похоже, такой страницы не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;