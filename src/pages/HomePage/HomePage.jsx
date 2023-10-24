import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizPage from '../QuizPage/QuizPage';
import * as quizAPI from '../../utilities/quiz-api';
import 'materialize-css/dist/css/materialize.css';

const HomePage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category: '9', difficulty: 'easy' });
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then((response) => setCategories(response.data.trivia_categories))
      .catch((error) => console.error(error));
  }, []);

  const handleQuizOptions = (e) => {
    const quiz = { ...formData, [e.target.name]: e.target.value };
    setFormData(quiz);
  };

  async function handleSubmit() {
    const quiz = await quizAPI.startQuiz(formData);
    setQuestions(quiz.results);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <label>Select a Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleQuizOptions}
            className="browser-default"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col s12">
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleQuizOptions}
            className="browser-default"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="col s12">
          <button onClick={handleSubmit} className="btn waves-effect waves-light indigo lighten-2"> {/* Add Materialize CSS classes */}
            Take Quiz
            <i className="material-icons right"></i>
          </button>
        </div>
      </div>
      {questions && <QuizPage questions={questions} />}
    </div>
  );
};

export default HomePage;
