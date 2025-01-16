import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import logo from "./Logo.jpg";

const CricketQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(5); // Start timer at 5 seconds

  const navigate = useNavigate(); // Hook for navigation

  const questions = [
    { question: 'Who won the 2019 Cricket World Cup?', options: ['England', 'India', 'Australia'], answer: 'England' },
    { question: 'Who holds the record for most runs in ODIs?', options: ['Sachin Tendulkar', 'Virat Kohli', 'Ricky Ponting'], answer: 'Sachin Tendulkar' },
    { question: 'Which player is known as the "Master Blaster" in cricket?', options: ['Shane Warne', 'Sachin Tendulkar', 'Brian Lara'], answer: 'Sachin Tendulkar' },
    // Add more questions as needed
  ];

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setShowScore(true); // Show score when all questions are answered
      return;
    }

    if (timer === 0) {
      // Move to the next question when timer hits zero
      setCurrentIndex(currentIndex + 1);
      setTimer(5); // Reset timer for the next question
    }

    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1); // Decrease the timer every second
      }
    }, 1000);

    // Cleanup interval when component unmounts or timer changes
    return () => clearInterval(timerInterval);

  }, [timer, currentIndex]);

  const handleAnswer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question immediately after an answer is selected
    setCurrentIndex(currentIndex + 1);
    setTimer(5); // Reset timer
  };

  const handleGoHome = () => {
    navigate('/quiz'); // Navigate to the home page
  };

  const handleGoLeaderboard = () => {
    const username = prompt('Enter your name:'); // Get the user's name
    if (username) {
      // Save the score to localStorage
      const savedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
      savedLeaderboard.push({ username, score });
      
      // Sort the leaderboard in descending order by score and save the top 5
      savedLeaderboard.sort((a, b) => b.score - a.score);
      localStorage.setItem('leaderboard', JSON.stringify(savedLeaderboard.slice(0, 5))); // Save top 5
    }
    navigate('/leaderboard'); // Navigate to the leaderboard page
  };
  

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      fontFamily: "'Press Start 2P', cursive",
      textAlign: 'center',
    },
    questionContainer: {
      margin: '20px 0',
      padding: '20px',
      border: '2px solid #00ffc3',
      borderRadius: '15px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.6)',
      color: '#00ffc3',
    },
    button: {
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#00ffc3',
      color: '#000',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
      textShadow: '0 0 10px #000',
      transition: 'all 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#00bfa6',
      transform: 'scale(1.1)',
      boxShadow: '0 0 20px #00ffc3',
    },
    scoreContainer: {
      textAlign: 'center',
    },
    scoreText: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#00ffc3',
      textShadow: '0 0 10px #00ffc3',
    },
  };

  if (showScore) {
    return (
      <div style={styles.container}>
        <div style={styles.scoreContainer}>
          <h1 style={styles.scoreText}>Cricket Quiz Finished</h1>
          <h2 style={styles.scoreText}>Your Score: {score} / {questions.length}</h2>
          <button
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            onClick={handleGoHome}
          >
            Go to Home
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            onClick={handleGoLeaderboard}
          >
            Go to Leaderboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.questionContainer}>
        <Image image={logo} />
        <h1 style={styles.scoreText}>Cricket Quiz</h1>
        <p>Time Remaining: {timer}s</p> {/* Display timer on screen */}
        <h2>Question {currentIndex + 1}</h2>
        <p>{questions[currentIndex]?.question}</p>
        {questions[currentIndex]?.options.map((option, i) => (
          <button
            key={i}
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            onClick={() => handleAnswer(option, questions[currentIndex].answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CricketQuiz;
