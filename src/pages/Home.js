import Footer from "../components/Footer";
import styles from './index.module.scss';

function Home() {
  return (

    <div className={styles.home}>
      <div className={styles.container_home}>
        <div className={styles.container}>
          <h2 className={styles.home_page_fio}>
          На этой странице вы можете узнать немного обо мне 
        </h2>
        <h2 className={styles.home_page_fio}>
          Всем привет <br/>Меня зовут Гульназ Султанова 
        </h2>
        <h4 className={styles.home_about}>У меня вы можете заказать: Кейтеринг.  Гастробоксы. Фуршеты   на свадьбу, никах, выкуп невесты/ жениха, дни рождения, юбилеи, детские праздники,  открытие салона и т.д.</h4>

        <h4 className={styles.home_about}>Работаю в городах: Туймазы, Октябрьский, Шаран</h4>

        <div className={styles.homeLinks}>
          <a className={styles.home_link} href="mailto:ahmetyanovag@bk.ru">Написать на почту:<br/> ahmetyanovag@bk.ru</a>
          <a className={styles.home_link} href="tel:+79270897864">Позвонить по телефону: <br/>8-927-089-78-64</a>
        </div>        
        </div>
      
                
                 
      </div>
      
    <Footer/>

    </div>
    
);
}
export default Home;