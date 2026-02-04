import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import StudentComponent from '../components/StudentComponent';
import './Home.css';

function Home() {
  const [students] = useState([
    { id: 1, name: 'Juan Dela Cruz', course: 'BS Computer Science', year: '3rd Year', studentId: '2021-001', email: 'juan.delacruz@example.com' },
    { id: 2, name: 'Maria Santos', course: 'BS Information Technology', year: '2nd Year', studentId: '2022-042', email: 'maria.santos@example.com' },
    { id: 3, name: 'Pedro Reyes', course: 'BS Computer Engineering', year: '4th Year', studentId: '2020-018', email: 'pedro.reyes@example.com' },
    { id: 4, name: 'Ana Lopez', course: 'BS Information Systems', year: '1st Year', studentId: '2023-107', email: 'ana.lopez@example.com' },
    { id: 5, name: 'Carlo Mendoza', course: 'BS Computer Science', year: '2nd Year', studentId: '2022-215', email: 'carlo.mendoza@example.com' },
    { id: 6, name: 'Jasmine Cruz', course: 'BS Information Technology', year: '3rd Year', studentId: '2021-319', email: 'jasmine.cruz@example.com' },
    { id: 7, name: 'Mark Villanueva', course: 'BS Computer Engineering', year: '1st Year', studentId: '2023-056', email: 'mark.villanueva@example.com' },
    { id: 8, name: 'Paolo Garcia', course: 'BS Information Technology', year: '4th Year', studentId: '2020-144', email: 'paolo.garcia@example.com' },
    { id: 9, name: 'Katrina Flores', course: 'BS Computer Science', year: '1st Year', studentId: '2023-082', email: 'katrina.flores@example.com' },
    { id: 10, name: 'Bianca Ramos', course: 'BS Information Systems', year: '2nd Year', studentId: '2022-091', email: 'bianca.ramos@example.com' },
    { id: 11, name: 'Noah Lim', course: 'BS Computer Engineering', year: '3rd Year', studentId: '2021-233', email: 'noah.lim@example.com' },
    { id: 12, name: 'Sofia Torres', course: 'BS Information Technology', year: '2nd Year', studentId: '2022-178', email: 'sofia.torres@example.com' },
  ]);
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const filteredStudents = normalizedQuery
    ? students.filter((s) => {
        const haystack = [
          s.name,
          s.course,
          s.year,
          s.studentId,
          s.email,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : students;

  return (
    <div className="home-page">
      <HeaderComponent
        title="Welcome"
        subtitle="Student Info App — Manage and view student information"
      />
      <main className="portfolio-content">
        <section className="portfolio-section student-info-section" id="student-information">
          <div className="section-badge">Student Information</div>
          <h2>Student Records</h2>
          <p className="section-desc">View and manage student details. Click &quot;Show Details&quot; for more info.</p>
          <div className="student-tools">
            <div className="student-search">
              <input
                className="student-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search students (name, course, year, ID, email)..."
              />
              {query && (
                <button
                  type="button"
                  className="student-search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="student-count">
              Showing <strong>{filteredStudents.length}</strong> of{' '}
              <strong>{students.length}</strong>
            </div>
          </div>
          <div className="students-grid">
            {filteredStudents.map((student) => (
              <StudentComponent
                key={student.id}
                name={student.name}
                course={student.course}
                year={student.year}
                studentId={student.studentId}
                email={student.email}
              />
            ))}
          </div>
          {normalizedQuery && filteredStudents.length === 0 && (
            <div className="student-search-alert" role="alert">
              <span className="student-search-alert-icon">⚠️</span>
              <p className="student-search-alert-text">
                No student found matching &quot;{query}&quot;
              </p>
              <p className="student-search-alert-hint">
                Try a different name, course, year, or student ID.
              </p>
              <button
                type="button"
                className="student-search-alert-btn"
                onClick={() => setQuery('')}
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
