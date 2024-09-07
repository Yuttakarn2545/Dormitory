import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { auth, logout } = useAuth();

  if (!auth) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
