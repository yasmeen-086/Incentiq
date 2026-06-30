import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { kpiData, monthlyData, regionData, leaderboardData, anomalyData } from '../data';

function KPICard({ label, value, sub, trend, up }) {
  return (
    <div className="kpi-card">
      <p className="kpi-label">{label}</p>
      <p className="kpi-value">{value}</p>
      <div className="kpi-footer">
        <span className={`kpi-trend ${up ? 'up' : 'down'}`}>
          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trend}
        </span>
        <span className="kpi-sub">{sub}</span>
      </div>
    </div>
  );
}

function AnomalyBadge({ severity }) {
  return (
    <span className={`badge badge-${severity.toLowerCase()}`}>
      {severity}
    </span>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p className="dashboard-sub">Enterprise Incentive Analytics · FY2024</p>
        </div>
        <div className="header-right">
          <span className="live-badge">● Live</span>
          <button className="export-btn">Export Report</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpiData.map((kpi, i) => (
          <KPICard key={i} {...kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="charts-row">

        {/* Monthly Trend */}
        <div className="chart-card wide">
          <div className="card-header">
            <h2>Monthly Payout Trend</h2>
            <span className="trend-tag up">↑ Upward FY2024</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData} barSize={28}>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#888' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `₹${(v/1e6).toFixed(1)}M`} tick={{ fontSize: 11, fill: '#888' }} axisLine={false} tickLine={false} />
              <Tooltip formatter={v => [`₹${v.toLocaleString()}`, 'Payout']} />
              <Bar dataKey="payout" radius={[4, 4, 0, 0]}>
                {monthlyData.map((_, i) => (
                  <Cell key={i} fill={i === 8 ? '#1C5FAF' : '#B5D4F4'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Region Performance */}
        <div className="chart-card">
          <div className="card-header">
            <h2>Region Performance</h2>
          </div>
          <div className="region-list">
            {regionData.map((r, i) => (
              <div key={i} className="region-item">
                <div className="region-top">
                  <span className="region-name">{r.region}</span>
                  <span className="region-pct">{r.achievement}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${r.achievement}%`,
                      background: r.achievement >= 96 ? '#2D6A0F' : r.achievement >= 94 ? '#1C5FAF' : '#BA7517'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="bottom-row">

        {/* Leaderboard */}
        <div className="chart-card wide">
          <div className="card-header">
            <h2>🏆 Agent Leaderboard</h2>
            <span className="see-all">Top 10</span>
          </div>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Agent</th>
                <th>Grade</th>
                <th>Region</th>
                <th>Total Payout</th>
                <th>Achievement</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((a, i) => (
                <tr key={i}>
                  <td className="rank">
                    {i < 3 ? ['🥇','🥈','🥉'][i] : a.rank}
                  </td>
                  <td className="agent-name">{a.name}</td>
                  <td><span className={`grade-badge ${a.grade.toLowerCase()}`}>{a.grade}</span></td>
                  <td>{a.region}</td>
                  <td className="payout">₹{a.payout.toLocaleString()}</td>
                  <td>
                    <span className={`ach-pct ${a.achievement >= 97 ? 'high' : ''}`}>
                      {a.achievement}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Anomalies */}
        <div className="chart-card">
          <div className="card-header">
            <h2><AlertTriangle size={16} /> Anomaly Alerts</h2>
            <span className="badge badge-high">6 Flagged</span>
          </div>
          <div className="anomaly-list">
            {anomalyData.map((a, i) => (
              <div key={i} className={`anomaly-item ${a.severity.toLowerCase()}`}>
                <div className="anomaly-top">
                  <span className="anomaly-agent">{a.agent}</span>
                  <AnomalyBadge severity={a.severity} />
                </div>
                <p className="anomaly-reason">{a.reason}</p>
                <div className="anomaly-meta">
                  <span>{a.month}</span>
                  <span>₹{a.payout.toLocaleString()}</span>
                  <span>Z={a.zscore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;