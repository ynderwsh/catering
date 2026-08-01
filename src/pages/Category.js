import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import styles from './index.module.scss';

function Category() {
  const { category } = useParams();
  const [items, setItems] = React.useState([]);

 React.useEffect(() => {
  fetch(`/db.json`)
    .then(res => res.json())
    .then(data => setItems(data[category] || []))
    .catch(() => setItems([]));
}, [category]);

  return (
    <div className={styles.otstup}>
      <p className={styles.category_page}>{category}</p>

      <div className={styles.main_card}>
  {items.map(item => (
    <Card 
      key={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    />
  ))}
</div>
    </div>
  );
}

export default Category;