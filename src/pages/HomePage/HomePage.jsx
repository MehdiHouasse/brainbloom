import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(9);

  useEffect(() => {
    // Load categories when the component mounts
    axios
      .get('https://opentdb.com/api_category.php')
      .then((response) => setCategories(response.data.trivia_categories))
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Trivia Game</h1>
      <label>
        Select a Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => window.location.href = `/quiz?category=${selectedCategory}`}>
        Take Quiz
      </button>
    </div>
  );
};

export default HomePage;
