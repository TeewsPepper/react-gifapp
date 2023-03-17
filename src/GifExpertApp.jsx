import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif-Expert-App</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;


