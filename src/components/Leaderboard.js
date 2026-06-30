import React, { useState } from 'react';
import { leaderboardData, regionData } from '../data';
import { Trophy } from 'lucide-react';

function Leaderboard() {
  const [sortBy, setSortBy] = useState('payout');

  const sorted = [...leaderboardData].sort((a, b) =>
    sortBy === 'payout' ? b.payout - a.payout : b.achievement - a.achievement
  );

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Leaderboard</h1>
          <p className="dashboard-sub">Top performing agents · FY2024</p>
        </div>
        <div className="header-right">
          <button
            className="export-btn"
            style={{ background: sortBy === 'payout' ? '#E6F1FB' : 'white', color: sortBy === 'payout' ? '#1C5FAF' : '#666', borderColor: sortBy === 'payout' ? '#1C5FAF' : '#DDD' }}
            onClick={() => setSortBy('payout')}
          >Sort by Payout</button>
          <button
            className="export-btn"
            style={{ background: sortBy === 'achievement' ? '#E6F1FB' : 'white', color: sortBy === 'achievement' ? '#1C5FAF' : '#666', borderColor: sortBy === 'achievement' ? '#1C5FAF' : '#DDD' }}
            onClick={() => setSortBy('achievement')}
          >Sort by Achievement</button>
        </div>
      </div>

      {/* Top 3 podium */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
        {sorted.slice(0, 3).map((a, i) => (
          <div key={i} className="chart-card" style={{
            textAlign: 'center', padding: '24px 16px',
            borderTop: `3px solid ${i === 0 ? '#F59E0B' : i === 1 ? '#9CA3AF' : '#CD7C2F'}`
          }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>{medals[i]}</div>
            <p style={{ fontWeight: 700, fontSize: 15, color: '#1A1917', marginBottom: 4 }}>{a.name}</p>
            <p style={{ fontSize: 12, color: '#888', marginBottom: 12 }}>{a.grade} · {a.region}</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#1C5FAF', marginBottom: 4 }}>
              ₹{a.payout.toLocaleString()}
            </p>
            <p style={{ fontSize: 12, color: '#2D6A0F', fontWeight: 600 }}>{a.achievement}% achievement</p>
          </div>
        ))}
      </div>

      {/* Full table */}
      <div className="chart-card">
        <div className="card-header">
          <h2><Trophy size={16} /> Full Rankings</h2>
          <span className="see-all">FY2024</span>
        </div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Agent</th>
              <th>Grade</th>
              <th>Region</th>
              <th>Total Payout</th>
              <th>Achievement</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((a, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700, fontSize: i < 3 ? 18 : 13 }}>
                  {i < 3 ? medals[i] : i + 1}
                </td>
                <td className="agent-name">{a.name}</td>
                <td><span className={`grade-badge ${a.grade.toLowerCase()}`}>{a.grade}</span></td>
                <td>{a.region}</td>
                <td className="payout">₹{a.payout.toLocaleString()}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 80, height: 6, background: '#F0EDE6', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: 999,
                        width: `${a.achievement}%`,
                        background: a.achievement >= 97 ? '#2D6A0F' : '#1C5FAF'
                      }} />
                    </div>
                    <span className={`ach-pct ${a.achievement >= 97 ? 'high' : ''}`}>{a.achievement}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;