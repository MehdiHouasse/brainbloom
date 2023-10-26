import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import QuizPage from "../QuizPage/QuizPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import * as quizAPI from "../../utilities/quiz-api";
export default function App() {
  const [user, setUser] = useState(getUser());
  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
    async function getAll(){
      const quizs = await quizAPI.getQuizs();
      setQuizs(quizs);

    }
    getAll();
  } ,[])
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/scorboard" element={<ScoreBoard />} />
            <Route path="/profile" element={<ProfilePage savedQuiz={quizs} />} />

          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
