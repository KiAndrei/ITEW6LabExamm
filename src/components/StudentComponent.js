import React, { useState } from 'react';
import './StudentComponent.css';

function StudentComponent({ name, course, year, studentId, email }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const initial = name ? name.charAt(0) : '?';

  const handleShowDetails = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewCount = () => {
    setDisplayCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="student-component">
        <div className="student-card">
          <div className="student-avatar">{initial}</div>
          <h3 className="student-name">{name}</h3>
          <p className="student-info">
            <span className="student-label">Course</span> {course}
          </p>
          <p className="student-info">
            <span className="student-label">Year</span> {year}
          </p>
          <div className="student-actions">
            <button
              type="button"
              className="btn btn-toggle"
              onClick={handleShowDetails}
            >
              Show Details
            </button>
            <button
              type="button"
              className="btn btn-count"
              onClick={handleViewCount}
            >
              View Count: {displayCount}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="student-modal-overlay" onClick={handleCloseModal}>
          <div
            className="student-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="student-modal-close"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>
            <div className="student-modal-avatar">{initial}</div>
            <h3 className="student-modal-name">{name}</h3>
            <div className="student-modal-details">
              <p>
                <span className="student-label">Course</span> {course}
              </p>
              <p>
                <span className="student-label">Year</span> {year}
              </p>
              {studentId && (
                <p>
                  <span className="student-label">Student ID</span> {studentId}
                </p>
              )}
              {email && (
                <p>
                  <span className="student-label">Email</span>{' '}
                  <a href={`mailto:${email}`} className="student-modal-email">
                    {email}
                  </a>
                </p>
              )}
            </div>
            <button
              type="button"
              className="btn btn-toggle student-modal-btn"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentComponent;
