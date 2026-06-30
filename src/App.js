import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import Agents from './components/Agents';
import Anomalies from './components/Anomalies';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';

function ComingSoon({ page }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      height: '100%', color: '#888'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
      <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
        {page} — Coming Soon
      </h2>
      <p style={{ fontSize: '14px' }}>This section is under development</p>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch(activePage) {
      case 'dashboard':   return <Dashboard />;
      case 'trends':      return <Trends />;
      case 'agents': return <Agents />;
      case 'anomalies': return <Anomalies />;
      case 'leaderboard': return <Leaderboard />;
      case 'settings': return <Settings />;
      default:            return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;