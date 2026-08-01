import styles from './Header.module.scss';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link to="/" className={styles.logo}>Catering</Link>
            <div className={styles.menu_items}>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}
export default Header;

