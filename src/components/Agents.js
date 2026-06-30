import React, { useState } from 'react';
import { leaderboardData } from '../data';
import { Search } from 'lucide-react';

function Agents() {
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState('All');

  const grades   = ['All', 'Lead', 'Senior', 'Junior'];
  const regions  = ['All', 'East', 'Central', 'West', 'North', 'South'];

  const filtered = leaderboardData.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchGrade  = gradeFilter  === 'All' || a.grade  === gradeFilter;
    const matchRegion = regionFilter === 'All' || a.region === regionFilter;
    return matchSearch && matchGrade && matchRegion;
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Agents</h1>
          <p className="dashboard-sub">All sales agents · FY2024</p>
        </div>
        <span className="live-badge">{filtered.length} agents</span>
      </div>

      {/* Filters */}
      <div className="chart-card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
            <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder="Search agent name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '8px 8px 8px 32px',
                border: '1px solid #E8E5DC', borderRadius: 8,
                fontSize: 13, outline: 'none', background: '#FAFAF8'
              }}
            />
          </div>

          {/* Grade filter */}
          <div style={{ display: 'flex', gap: 6 }}>
            {grades.map(g => (
              <button
                key={g}
                onClick={() => setGradeFilter(g)}
                style={{
                  padding: '6px 14px', borderRadius: 999,
                  border: '1px solid', fontSize: 12, cursor: 'pointer', fontWeight: 500,
                  borderColor: gradeFilter === g ? '#1C5FAF' : '#E8E5DC',
                  background:  gradeFilter === g ? '#E6F1FB' : 'white',
                  color:       gradeFilter === g ? '#1C5FAF' : '#666',
                }}
              >{g}</button>
            ))}
          </div>

          {/* Region filter */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                style={{
                  padding: '6px 14px', borderRadius: 999,
                  border: '1px solid', fontSize: 12, cursor: 'pointer', fontWeight: 500,
                  borderColor: regionFilter === r ? '#2D6A0F' : '#E8E5DC',
                  background:  regionFilter === r ? '#EAF3DE' : 'white',
                  color:       regionFilter === r ? '#2D6A0F' : '#666',
                }}
              >{r}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Agents table */}
      <div className="chart-card">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Agent</th>
              <th>Grade</th>
              <th>Region</th>
              <th>Total Payout</th>
              <th>Achievement</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', color: '#888', padding: 32 }}>
                  No agents found
                </td>
              </tr>
            ) : (
              filtered.map((a, i) => (
                <tr key={i}>
                  <td className="rank">{i < 3 ? ['🥇','🥈','🥉'][i] : a.rank}</td>
                  <td className="agent-name">{a.name}</td>
                  <td><span className={`grade-badge ${a.grade.toLowerCase()}`}>{a.grade}</span></td>
                  <td>{a.region}</td>
                  <td className="payout">₹{a.payout.toLocaleString()}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 60, height: 6, background: '#F0EDE6', borderRadius: 999, overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', borderRadius: 999,
                          width: `${a.achievement}%`,
                          background: a.achievement >= 97 ? '#2D6A0F' : '#1C5FAF'
                        }} />
                      </div>
                      <span className={`ach-pct ${a.achievement >= 97 ? 'high' : ''}`}>{a.achievement}%</span>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      fontSize: 11, padding: '2px 8px', borderRadius: 999, fontWeight: 500,
                      background: '#EAF3DE', color: '#2D6A0F'
                    }}>Active</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agents;