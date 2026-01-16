import Card from "../components/Card";
import Footer from "../components/Footer";
import styles from './index.module.scss';

function Kanape() {
  return (
    <div className={styles.ap}>

    <div className={styles.main}>
           
    <Card/>
        
    </div>
    <Footer/>

    </div>
  );
}

export default Kanape;