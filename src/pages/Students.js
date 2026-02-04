import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import './Students.css';

function Students() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch data. Please try again.');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="students-page">
      <HeaderComponent
        title="Students from API"
        subtitle="User data fetched from JSONPlaceholder"
      />
      <main className="students-content">
        {loading && (
          <div className="loading-state" data-testid="loading-state">
            <div className="loading-spinner" />
            <p>Loading students...</p>
          </div>
        )}

        {error && (
          <div className="error-state" data-testid="error-state">
            <div className="error-icon">⚠️</div>
            <h3>Error Loading Data</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <div className="api-list">
            <h2>Student List (API Data)</h2>
            <ul className="user-list">
              {users.map((user) => (
                <li key={user.id} className="user-item">
                  <div className="user-card">
                    <h3>{user.name}</h3>
                    <p className="user-username">@{user.username}</p>
                    <p className="user-email">{user.email}</p>
                    <p className="user-address">
                      {user.address?.city}, {user.address?.street}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <p className="no-data">No students to display.</p>
        )}
      </main>
    </div>
  );
}

export default Students;
