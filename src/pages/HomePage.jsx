import React from 'react';
import './HomePage.css';
import ProjectCompleteCard from './components/ProjectCompleteCard';
import FullNameCard from './components/FullNameCard';
import HeadlineCard from './components/HeadlineCard';
import ProfileCard from './components/ProfileCard';
import ContactCard from './components/ContactCard';
import ScheduleCard from './components/ScheduleCard';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="profile-grid">
        <ProjectCompleteCard />

        <FullNameCard />

        <HeadlineCard />

        <div className="card-dark total-follows">
          <h2>Total Followers</h2>
          <div className="heart">
            <img src="/assets/images/homepage/hearts.webp" alt=""/>
          </div>
          <p className="stat">1252</p>
          <p>1252 Users Followed</p>
        </div>

        <ProfileCard />

        <div className="card-dark testimonial">
          <h2>Social Link</h2>
          <div className="icon-row">
            <div className="contact-one">
              <a href='https://www.linkedin.com/in/richard-liu-828089375' target='blank'><img src="/assets/images/homepage/linkedin.png" alt="Linkedin" /></a>
              <a href='https://x.com/RichardLiu4598' target='blank'><img src="/assets/images/homepage/twitter.png" alt="Twitter" /></a>
            </div>
            <div className="contact-two">
              <a href='https://github.com/futuresea-ai' target='blank'><img src="/assets/images/homepage/github.png" alt="Github" /></a>
              <a href='https://orcid.org/0009-0009-6205-0357' target='blank'><img src="/assets/images/homepage/facebook.webp" alt="Google" /></a>
            </div>
          </div>
        </div>

        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="card orange-card experiences">
          <h2>Experience</h2>
          <p className="stat-bg">12<span className="small"> years</span></p>
        </a>

        <ScheduleCard />

        <ContactCard />
        
      </div>
    </div>
  );
};

export default HomePage;