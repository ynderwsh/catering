import styles from './Footer.module.scss';
import React from 'react';

function Footer(){
    return(
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footer_inner}>
              <h1 className={styles.footer_logo}>Catering</h1>
              <div className={styles.footer_menu_items}>
                <img className="icons_bottom" src="/img/phone_black.svg" alt="phone"/>
                
              </div>
              
            </div>
          </div>
        </div>
    )
}
export default Footer;