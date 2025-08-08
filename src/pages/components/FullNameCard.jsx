import { useState } from 'react';
import './FullNameCard.css';

export default function FullNameCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Full Name Card */}
      <div className="fullname-card card blue-card full-name" onClick={() => setShowModal(true)}>
        <h2>Full Name</h2>
        <p className="info">David Liu</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="door-modal" onClick={() => setShowModal(false)}>
          <div className="door-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <img
              className="avatar"
              src="/assets/images/homepage/avatar.jpg"
              alt="Avatar"
            /> */}
            <h2>David Liu</h2>
            <p><strong>220 Golden Gate Ave, San Francisco, CA, USA</strong></p>
            <p><strong> liur4598@gmail.com</strong></p>
            <p><strong>+1 (214) 894-7710</strong></p>
            <p><strong>Nov 18, 1988</strong></p>

            <div className="modal-icons">
              <a href='https://teams.live.com'><img src="/assets/images/homepage/teams.svg" alt="Teams" /></a>
              <a href='https://t.me/+12148947710'><img src="/assets/images/homepage/telegram.webp" alt="Telegram" /></a>
              <a href="tel:+12148947710"><img src="/assets/images/homepage/phone-call-icon.png" alt="Phone" /></a>
              <a href="mailto:liur4598@gmail.com"><img src="/assets/images/homepage/google.webp" alt="Google" /></a>
            </div>

            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}