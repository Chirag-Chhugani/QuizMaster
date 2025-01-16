import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = (quizType) => {
    navigate(`/quiz/${quizType}`);
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
    heading: {
      fontSize: '48px',
      marginBottom: '10px',
      color: '#00ffc3',
      textShadow: '0 0 15px #00ffc3, 0 0 30px #00bfa6',
      letterSpacing: '2px',
    },
    subheading: {
      fontSize: '24px',
      marginBottom: '30px',
      color: '#00bfa6',
      textShadow: '0 0 10px #00bfa6, 0 0 20px #007f7f',
    },
    quizContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '30px',
    },
    quizBox: {
      width: '200px',
      height: '200px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.6)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    quizBoxHover: {
      transform: 'scale(1.1)',
      boxShadow: '0 0 20px #00ffc3',
    },
    quizText: {
      color: 'white',
      fontWeight: 'bold',
      textShadow: '0 0 10px black',
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Quiz App</h1>
      <h2 style={styles.subheading}>Select a Quiz</h2>
      <div style={styles.quizContainer}>
        <div
          style={{
            ...styles.quizBox,
            backgroundImage:
              "url('https://media.istockphoto.com/id/1471996003/photo/cricket-players-batsman-hitting-ball-in-a-stadium.webp?a=1&b=1&s=612x612&w=0&k=20&c=tmHGD9HavJoAWbDoYnqNVm3ZGFvaLbaq41HqFVSCcQQ=')",
          }}
          onMouseOver={(e) => Object.assign(e.target.style, styles.quizBoxHover)}
          onMouseOut={(e) => Object.assign(e.target.style, styles.quizBox)}
          onClick={() => startQuiz('cricket')}
        >
          <span style={styles.quizText}>Cricket Quiz</span>
        </div>
        <div
          style={{
            ...styles.quizBox,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          onMouseOver={(e) => Object.assign(e.target.style, styles.quizBoxHover)}
          onMouseOut={(e) => Object.assign(e.target.style, styles.quizBox)}
          onClick={() => startQuiz('football')}
        >
          <span style={styles.quizText}>Football Quiz</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
