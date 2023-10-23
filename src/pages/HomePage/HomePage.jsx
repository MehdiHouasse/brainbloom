import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as quizAPI from "../../utilities/quiz-api";
const HomePage = () => {

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({category: "9", difficulty: "easy"});
  const [questions, setQuestions] = useState(null);

  useEffect(() => {

    axios
      .get('https://opentdb.com/api_category.php')
      .then((response) => setCategories(response.data.trivia_categories))
      .catch((error) => console.error(error));
  }, []);

  const handleQuizOptions = (e) => {
  const quiz = {...formData, [e.target.name]: e.target.value}
    setFormData(quiz);
  };
 async function handleSubmit(){
  const quiz = await quizAPI.startQuiz(formData)
  setQuestions(quiz.results);
 }
  return (
    <div>
      <h1>Brain Bloom</h1>
      <label>
        Select a Category:
        <select name = "category" value={formData.category} onChange={handleQuizOptions}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <select name= 'difficulty' value={formData.difficulty} onChange={handleQuizOptions}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={handleSubmit}>
        Take Quiz
      </button>
    </div>
  );
};

export default HomePage;
