import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate=useNavigate();
  // Dummy data (this could be from a database or localStorage)
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Retrieve leaderboard data (here we'll use localStorage for demo purposes)
    const savedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    
    // Sort leaderboard by score in descending order and get top 5
    savedLeaderboard.sort((a, b) => b.score - a.score);
    setLeaderboard(savedLeaderboard.slice(0, 5)); // Only top 5
  }, []);

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
    leaderboardContainer: {
      padding: '20px',
      marginTop: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.6)',
    },
    leaderboardItem: {
      margin: '10px 0',
      fontSize: '20px',
      color: '#00ffc3',
      textShadow: '0 0 10px #00ffc3',
    },
    backButton: {
      padding: '10px 20px',
      margin: '20px',
      backgroundColor: '#00ffc3',
      color: '#000',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textShadow: '0 0 10px #000',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leaderboardContainer}>
        <h1 style={{ fontSize: '32px', color: '#00ffc3' }}>Leaderboard</h1>
        {leaderboard.length === 0 ? (
          <p style={{ color: '#fff' }}>No scores available yet</p>
        ) : (
          leaderboard.map((user, index) => (
            <div key={index} style={styles.leaderboardItem}>
              <span>{index + 1}. {user.username} - {user.score} points</span>
            </div>
          ))
        )}
      </div>
      <button
        style={styles.backButton}
        onClick={() => navigate('/quiz')} // Navigate back to the previous page
      >
        Back to Quiz
      </button>
    </div>
  );
};

export default Leaderboard;
