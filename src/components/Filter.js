// src/components/Filter.js
import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <div className="Filter">
      <label>Filter by category</label>
      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
