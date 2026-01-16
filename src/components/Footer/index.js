import styles from './Footer.module.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';

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