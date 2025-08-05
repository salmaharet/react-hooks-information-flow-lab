// src/components/App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "./data";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  const appClass = isDarkMode ? "App dark" : "App light"; // ✅ ADD light here

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} /> {/* ✅ Pass props */}
    </div>
  );
}

export default App;
