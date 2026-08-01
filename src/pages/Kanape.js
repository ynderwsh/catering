import React from "react";
import axios from "axios";
import Card from "../components/Card";

function kanape() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://your-api/roulets").then(res => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Рулеты</h2>
      {items.map(item => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default kanape;