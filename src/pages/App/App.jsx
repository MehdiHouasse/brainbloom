import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
//import ModeSwitch from '../../components/ModeSwitch/ModeSwitch'; // Import ModeSwitch
import QuizPage from '../QuizPage/QuizPage';
import ScoreboardPage from '../ScoreBoard/ScoreBoard';
import ProfilePage from '../ProfilePage/ProfilePage';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import * as quizAPI from '../../utilities/quiz-api';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [quizs, setQuizs] = useState([]);
  const [scoreBoard, setScoreBoard] = useState([]);
  //const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // const toggleMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  useEffect(() => {
    async function getAll() {
      const quizs = await quizAPI.getQuizs();
      setQuizs(quizs);
    }
    getAll();
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          {/* <ModeSwitch isDarkMode={isDarkMode} toggleMode={toggleMode} /> */}
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route
              path="/scoreboard"
              element={<ScoreboardPage ScoreBoard={scoreBoard} />}
            />
            <Route
              path="/profile"
              element={<ProfilePage savedQuiz={quizs} />}
            />
          </Routes>
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
