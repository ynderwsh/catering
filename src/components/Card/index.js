import styles from './Card.module.scss';

function Card({ title, imageUrl, price }) {
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
      </div>
    </div>
  );
}

export default Card;