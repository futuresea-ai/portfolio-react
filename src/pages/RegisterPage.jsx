import React, { useState } from 'react';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setName(name.trim());
    setEmail(email.trim());
    // await axios.post('http://localhost:5000/api/register', { name, email, note});

    navigate('/home');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className='register-header'>WELCOME</h1>
        <form onSubmit={handleSubmit} className="name-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Note (optional)"
            rows={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button type="submit">
            <span>GO</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
