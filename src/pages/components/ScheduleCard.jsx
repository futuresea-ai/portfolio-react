import React from "react";

export default function ScheduleCard() {
    const handleSkillClick = () => {
        window.open("https://calendly.com/liur4598/schedule-a-google-meet", "_blank");
    };

    return (
        <div className="card green-card skills" onClick={handleSkillClick}>
            <h2>Schedule a Call</h2>
            <p className="stat-bg">1</p>
        </div>
    );
}