import { useState } from 'react';
import './ProfileCard.css';

export default function ProfilePhotoSwitcher() {
  const profileImages = [
    '/assets/images/golden_gate_bridge_hero.jpg',
    '/assets/images/golden_gate_lake.webp',
    '/assets/images/san_francisco.jpg',
    // '/assets/images/san_francisco1.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % profileImages.length);
  };

  return (
    <div className="card profile-photo profile-photo-card" onClick={handleClick}>
      <img
        src={profileImages[currentIndex]}
        alt="Profile"
        className="profile-photo"
      />
    </div>
  );
}
