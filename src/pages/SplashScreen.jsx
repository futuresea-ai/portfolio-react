import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const updateTimeAndDate = () => {
    const now = new Date();

    // Format time as HH:MM in PDT
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Los_Angeles',
      hour12: false,
    });

    // Format date as Weekday, Month Day in PDT
    const dateString = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Los_Angeles',
    });

    setTime(timeString);
    setDate(dateString);
  };

  const handleNavigation = () => {
    navigate('/register');
  };

  useEffect(() => {
    updateTimeAndDate(); // Set initially
    const interval = setInterval(updateTimeAndDate, 1000); // Update every second

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') handleNavigation();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div
      className="splash-screen"
      onClick={handleNavigation}
      style={{ backgroundImage: "url('/assets/images/lock_screen/3.jpg')" }}
    >
      <div className="time-date">
        
        <h1>{time}</h1>
        <h2>{date}</h2>
        <p>Please click mouse or press Enter to browse portfolio</p>
      </div>
    </div>
  );
};

export default SplashScreen;
