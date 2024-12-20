import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch all users from the Firebase database
      const response = await axios.get(
        'https://quiz-master-64a7d-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
      );

      // Check if the response contains user data
      if (response.data) {
        // Find the user with the matching email and password
        const users = response.data;
        const user = Object.entries(users).find(
          ([key, value]) => value.email === email && value.password === password
        );

        if (user) {
          // Successful login
          onLogin(user[0]); // Passing the user id to the parent component
          navigate('/'); // Redirect to Home page
        } else {
          // Invalid credentials
          setError('Invalid email or password');
        }
      }
    } catch (err) {
      // Error handling
      console.error(err);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/signup')}
        >
          Sign up here
        </span>
      </p>
    </div>
  );
};

export default Login;
