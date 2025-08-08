// import { useState } from 'react';
// import './FullNameCard.css';

export default function ContactCard() {
    return (
        <div className="card-dark contacts">
            <h2>Contact Info</h2>
            <div className="icon-row">
            <div className="contact-one">
                <a href='https://teams.live.com/l/invite/FBAORjVKR5w3GQQJgo' target='blank'><img src="/assets/images/homepage/teams.svg" alt="Teams" /></a>
                <a href='https://t.me/+12148947710' target='blank'><img src="/assets/images/homepage/telegram.webp" alt="Telegram" /></a>
            </div>
            <div className="contact-two">
                <a href="tel:+12148947710" target='blank'><img src="/assets/images/homepage/phone-call-icon.png" alt="phone" /></a>
                <a href='mailto:liur4598@gmail.com'><img src="/assets/images/homepage/google.webp" alt="Google" /></a>
            </div>
            </div>
        </div>
    );
}