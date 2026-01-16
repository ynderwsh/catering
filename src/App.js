import { SassColor } from 'sass';
import logo from './logo.svg';
import styles from './index.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.headerInner}>
              <h1 className={styles.logo}>Catering</h1>
              <div className={styles.menu_items}>
                <img className={styles.icons_top} src="/img/phone.svg" alt="phone"/>
                <Navbar />
              </div>
              
            </div>
          </div>
        </div>
          <div className={styles.line}></div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
     
  );
}
export default App;
