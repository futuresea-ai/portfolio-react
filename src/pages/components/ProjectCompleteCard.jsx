import React, { useState, useEffect, useRef } from 'react';
import './ProjectCompleteCard.css';

export default function ProjectCompleteCard() {
    const [showModal, setShowModal] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef(null);

    useEffect(() => {
        const totalImages = projects[currentProjectIndex].screenshots.length;
      
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % totalImages);
        }, 3000); // change every 3 seconds
      
        return () => clearInterval(interval); // cleanup on unmount or index change
    }, [currentProjectIndex]);

    const image_url = "/assets/images/projects/";

    const projects = [
        {
          title: "Heart Condition Detection System",
          screenshots: [ `${image_url}1/heartbeat1.webp`, `${image_url}1/heartbeat2.jpg`, `${image_url}1/heartbeat3.jpg`],
          name: "MediBot",
          description: "AI-Integrated Hospital Local Website",
          companyAvatar: `${image_url}1/avatar.jpg`,
          company: "PicnicHealth",
          companyDesc: "Powering Clinical Trials For Over 20 Years",
          about: "Designed and developed an AI-powered system capable of detecting abnormal heart conditions using audio recordings from a standard stethoscope. The pipeline captured heart sound data via a user-friendly web and mobile interface, preprocessed signals using MATLAB for noise reduction and frequency enhancement, then fed cleaned audio into deep learning models built with TensorFlow/Keras. Achieved 94.27% diagnostic accuracy, reducing false positives by 20% through hybrid model tuning (CNN + SVM + KNN). The end-to-end system was deployed via a Django backend and React frontend, with real-time analysis triggered in the cloud using Databricks and served through secure APIs. Integrated role-based access for clinicians and patients, and supported multi-device accessibility with responsive design.",
          techStack: ["Python", "React", "Node.js", "Django", "TensorFlow", "Keras", "MATLAB", "Spring Boot", "Azure", "LLM", "MongoDB", "Databricks", "AWS"]
        },
        {
          title: "Decentralized Clinical Trial (DCT) Software",
          screenshots: [`${image_url}2/1.webp`, `${image_url}2/2.webp`, `${image_url}2/4.webp`],
          name: "DCTM",
          description: "Conversational agent to assist patients with scheduling and triage.",
          company: "PicnicHealth",
          companyAvatar: `${image_url}2/avatar.jpg`,
          companyDesc: "Powering Clinical Trials For Over 20 Years",
          about: "Built an end-to-end software platform to support decentralized clinical trials, enabling remote participant onboarding, eConsent, symptom reporting, telehealth visits, and AI-assisted data monitoring. The backend was developed in Django, integrating secure patient data management, trial workflows, and investigator dashboards. The frontend, built with React, offered participants and researchers real-time updates, notifications, and multi-device access. Integrated AI models to monitor patient-reported outcomes and detect anomalies in trial data, improving early intervention capabilities by 35%. Used Twilio for telehealth and messaging, and deployed on AWS with S3 for data storage and Lambda for scalable functions. Ensured compliance with HIPAA and 21 CFR Part 11 regulations, including full audit trails, encryption, and role-based access control.",
          techStack: ["Python", "Ruby", "Vue.js", "Java", "React Native", "Swift", "PyTorch", "EHR", "Twilio", "Stripe", "Prometheus", "Grafana"]
        },
        {
            title: "Video Call API",
            screenshots: [`${image_url}3/1.jpg`, `${image_url}3/2.png`, `${image_url}3/3.png`],
            name: "MUX",
            description: "Cost-effective video infrastructure for businesses of all scale. Mux streams billions of minutes of video every day, from live and on-demand platforms to gen AI products.",
            company: "Mux",
            companyAvatar: `${image_url}3/avatar.png`,
            companyDesc: "Video technology company that provides infrastructure and tools for building and monitoring video streaming experiences",
            about: "Built scalable video APIs with Python, Ruby, and React, cutting video errors by 30%, and streamlining billions of minutes of delivery across Mux.",
            techStack: ["Python", "Ruby", "React.js", "React Native", "Swift", "TensorFlow", "OpenCV", "GPU/CPU"]
        }
    ];

    const handleProjectClick = () => {
        setShowModal(true);
        setCurrentProjectIndex(0);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleNext = () => {
        if (currentProjectIndex < projects.length - 1) {
          setCurrentProjectIndex(currentProjectIndex + 1);
        }
    };
      
    const handlePrevious = () => {
        if (currentProjectIndex > 0) {
          setCurrentProjectIndex(currentProjectIndex - 1);
        }
    };

    return (
        <>
            <div className="card-dark project-complete" onClick={handleProjectClick}>
                <h2>Project Complete</h2>
                <div className="progress-container">
                    <div className="progress-text">100%</div>
                </div>
                <p className="stat">28+</p>
                <p>Completed 28+ Projects</p>
            </div>
            {showModal && (
            <div className="slide-modal" ref={modalRef}>
                <button className="close-btn" onClick={closeModal}>×</button>
                <div className="modal-scrollable-content">
                    <h3>{projects[currentProjectIndex].title}</h3>

                    <div className="carousel-container">
                        <div className="carousel-image">
                            <img
                                src={projects[currentProjectIndex].screenshots[currentImageIndex]}
                                alt={`Screenshot ${currentImageIndex + 1}`}
                            />
                        </div>
                    </div>

                    <h2 className="project-name">{projects[currentProjectIndex].name}</h2>
                    <p className='project-description'>{projects[currentProjectIndex].description}</p>
                    <div className="company-card">
                        <img className="company-avatar" src={projects[currentProjectIndex].companyAvatar} alt="Company Logo" />
                        <div className="company-text">
                            <div className="company-name">{projects[currentProjectIndex].company}</div>
                            <div className="company-about">{projects[currentProjectIndex].companyDesc}</div>
                        </div>
                    </div>
                    <div className="about">
                        <h4>About the project</h4>
                        <p className='company-about'>{projects[currentProjectIndex].about}</p>
                    </div>
                    <p><strong>Tech Stack:</strong></p>
                    <p className='company-about'>{projects[currentProjectIndex].techStack.join(", ")}</p>
                    <br />
                    <br />
                    <div className="modal-buttons-fixed">
                        <button onClick={handlePrevious} disabled={currentProjectIndex === 0}>Previous</button>
                        <button onClick={handleNext} disabled={currentProjectIndex === projects.length - 1}>Next</button>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}