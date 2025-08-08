import { useState } from 'react';
import './HeadlineCard.css';

export default function HeadlineSwitcher() {
  const stackTitles = [
    'Full Stack Developer',
    'AI Engineer',
    'Frontend Specialist',
    'Backend Architect',
    'Tech Lead'
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % stackTitles.length);
  };

  return (
    <>
        <div className="card purple-card role clickable-headline" onClick={handleClick}>
            <h2>Headline</h2>
            <p className="info">
            {stackTitles[index]}
            </p>
        </div>
    </>
  );
}
