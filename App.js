import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={userId ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login onLogin={(id) => setUserId(id)} />}
        />
        <Route
          path="/signup"
          element={<Signup onSignup={(id) => setUserId(id)} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
