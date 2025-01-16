import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CricketQuiz from './pages/CricketQuiz';
import FootballQuiz from './pages/FootballQuiz';
import Leaderboard from './pages/Leaderboard';
const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/quiz"
          element={<Home/>}
        />
        <Route
          path="/login"
          element={<Login onLogin={(id) => setUserId(id)} />}
        />
        <Route
          path="/signup"
          element={<Signup onSignup={(id) => setUserId(id)} />}
        />
         <Route path="/quiz/cricket" element={<CricketQuiz />} />
         <Route path="/quiz/football" element={<FootballQuiz />} />
         <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      
    </Router>
  );
};

export default App;