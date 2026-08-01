import styles from './Card.module.scss';
import React from 'react';

function Card({ title, imageUrl, onFavorite, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
     {/* <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-disabled.svg" alt="disabled" />
      </div>*/}
      <img src={imageUrl} className={styles.tovar_image} alt={title} />
      <h5 className={styles.name_tovar}>{title}</h5>
      <div className={`${styles['price-container']}`}>
        <div>
          Цена {price} руб.
        </div>
       <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-removed.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;