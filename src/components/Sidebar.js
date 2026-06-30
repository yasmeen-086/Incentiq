import React from 'react';
import { LayoutDashboard, TrendingUp, Users, AlertTriangle, Trophy, Settings } from 'lucide-react';

const navItems = [
  { id: 'dashboard',   label: 'Dashboard',   icon: LayoutDashboard },
  { id: 'trends',      label: 'Trends',      icon: TrendingUp },
  { id: 'agents',      label: 'Agents',      icon: Users },
  { id: 'anomalies',   label: 'Anomalies',   icon: AlertTriangle },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'settings',    label: 'Settings',    icon: Settings },
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">💳</span>
        <span className="logo-text">IncentIQ</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`nav-item ${activePage === id ? 'active' : ''}`}
            onClick={() => setActivePage(id)}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">JS</div>
        <div className="user-info">
          <p className="user-name">Jass</p>
          <p className="user-role">Analyst</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;