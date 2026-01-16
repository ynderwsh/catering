import styles from './Card.module.scss';
import React from 'react';

function Card(){
    return(
    <div className={styles.container}>
            <div className={styles.page_name}>
                <div className={styles.h2}>Салат в рулете</div>
            </div>
            <div className={styles.container_main}>
            <div className={styles.container_tovar}>
                <img className={styles.tovar_image} src="/img/1.jpg" alt="image"/>                
                    <h4 className={styles.name_tovar}>Салат Мимоза с подкопченой семгой и Салат с баклажанами и курицей</h4>
                <div clclassNamess={styles.main_grid_description}>
                        <div className={styles.grid_description}>
                            <img src="/img/price.svg" alt="weight"/>
                            <h5>1600 рублей</h5>
                        </div>
                        <div className={styles.grid_description}>
                                <img src="/img/weight.svg" alt="weight"/>
                                <h5>1000-1200 грамм</h5>
                        </div>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.more}>Подробнее</button>
                </div>   
            </div>
            <div className={styles.container_tovar}>
                <img className={styles.tovar_image} src="/img/2.jpg" alt="image"/>                
                    <h4 className={styles.name_tovar}>Салат Мимоза с подкопченой семгой и Салат с баклажанами и курицей</h4>
                <div clclassNamess={styles.main_grid_description}>
                        <div className={styles.grid_description}>
                            <img src="/img/price.svg" alt="weight"/>
                            <h5>1600 рублей</h5>
                        </div>
                        <div className={styles.grid_description}>
                                <img src="/img/weight.svg" alt="weight"/>
                                <h5>1000-1200 грамм</h5>
                        </div>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.more}>Подробнее</button>
                </div>   
            </div>
            <div className={styles.container_tovar}>
                <img className={styles.tovar_image} src="/img/3.jpg" alt="image"/>                
                    <h4 className={styles.name_tovar}>Салат Мимоза с подкопченой семгой и Салат с баклажанами и курицей</h4>
                <div clclassNamess={styles.main_grid_description}>
                        <div className={styles.grid_description}>
                            <img src="/img/price.svg" alt="weight"/>
                            <h5>1600 рублей</h5>
                        </div>
                        <div className={styles.grid_description}>
                                <img src="/img/weight.svg" alt="weight"/>
                                <h5>1000-1200 грамм</h5>
                        </div>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.more}>Подробнее</button>
                </div>   
            </div>
            <div className={styles.container_tovar}>
                <img className={styles.tovar_image} src="/img/4.jpg" alt="image"/>                
                    <h4 className={styles.name_tovar}>Салат Мимоза с подкопченой семгой и Салат с баклажанами и курицей</h4>
                <div clclassNamess={styles.main_grid_description}>
                        <div className={styles.grid_description}>
                            <img src="/img/price.svg" alt="weight"/>
                            <h5>1600 рублей</h5>
                        </div>
                        <div className={styles.grid_description}>
                                <img src="/img/weight.svg" alt="weight"/>
                                <h5>1000-1200 грамм</h5>
                        </div>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.more}>Подробнее</button>
                </div>   
            </div>
            <div className={styles.container_tovar}>
                <img className={styles.tovar_image} src="/img/5.jpg" alt="image"/>                
                    <h4 className={styles.name_tovar}>Салат Мимоза с подкопченой семгой и Салат с баклажанами и курицей</h4>
                <div clclassNamess={styles.main_grid_description}>
                        <div className={styles.grid_description}>
                            <img src="/img/price.svg" alt="weight"/>
                            <h5>1600 рублей</h5>
                        </div>
                        <div className={styles.grid_description}>
                                <img src="/img/weight.svg" alt="weight"/>
                                <h5>1000-1200 грамм</h5>
                        </div>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.more}>Подробнее</button>
                </div>   
            </div>
            
            </div>
        </div>
    )
}
export default Card;