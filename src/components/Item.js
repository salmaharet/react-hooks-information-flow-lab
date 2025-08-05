// src/components/Item.js
import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart((prev) => !prev);
  }

  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={`Item ${itemClass}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
