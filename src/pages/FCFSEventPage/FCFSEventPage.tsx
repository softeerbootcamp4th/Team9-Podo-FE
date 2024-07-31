import React, { useEffect, useState } from "react";
import FCFSHintSection from "./FCFSHintSection";

const FCFSEventPage = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    let response = await fetch(`http://localhost:5000/v1/quiz`);
    const itemss = await response.json();
    console.log("items", itemss);
    setItems(itemss);
  };
  return (
    <div>
      {items && <button>{items.id}</button>}
      <div>ddd</div>
      {/* <FCFSHintSection /> */}
    </div>
  );
};

export default FCFSEventPage;
