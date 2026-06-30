import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { monthlyData, regionData } from '../data';

const enriched = monthlyData.map((m, i) => ({
  ...m,
  mom: i === 0 ? null : +((( m.payout - monthlyData[i-1].payout) / monthlyData[i-1].payout) * 100).toFixed(1),
  payoutM: (m.payout / 1e6).toFixed(2),
}));

function Trends() {
  const [metric, setMetric] = useState('payout');

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Trends</h1>
          <p className="dashboard-sub">Monthly performance analysis · FY2024</p>
        </div>
        <div className="header-right">
          <button
            className={`export-btn ${metric === 'payout' ? 'active-btn' : ''}`}
            onClick={() => setMetric('payout')}
          >Payout</button>
          <button
            className={`export-btn ${metric === 'achievement' ? 'active-btn' : ''}`}
            onClick={() => setMetric('achievement')}
          >Achievement %</button>
        </div>
      </div>

      {/* Main line chart */}
      <div className="chart-card" style={{ marginBottom: 20 }}>
        <div className="card-header">
          <h2>{metric === 'payout' ? 'Monthly Payout (₹)' : 'Monthly Achievement (%)'}</h2>
          <span className="trend-tag up">↑ Upward trend</span>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={enriched}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE6" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#888' }} axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={v => metric === 'payout' ? `₹${(v/1e6).toFixed(1)}M` : `${v}%`}
              tick={{ fontSize: 11, fill: '#888' }} axisLine={false} tickLine={false}
            />
            <Tooltip
              formatter={v => metric === 'payout' ? [`₹${Number(v).toLocaleString()}`, 'Payout'] : [`${v}%`, 'Achievement']}
            />
            <Line
              type="monotone"
              dataKey={metric === 'payout' ? 'payout' : 'achievement'}
              stroke="#1C5FAF" strokeWidth={2.5}
              dot={{ fill: '#1C5FAF', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Two column row */}
      <div className="charts-row">

        {/* MoM growth bar chart */}
        <div className="chart-card">
          <div className="card-header">
            <h2>Month-over-month growth</h2>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={enriched.slice(1)} barSize={28}>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#888' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `${v}%`} tick={{ fontSize: 11, fill: '#888' }} axisLine={false} tickLine={false} />
              <Tooltip formatter={v => [`${v}%`, 'MoM Growth']} />
              <Bar dataKey="mom" radius={[4,4,0,0]}>
                {enriched.slice(1).map((m, i) => (
                  <Cell key={i} fill={m.mom >= 0 ? '#2D6A0F' : '#A32D2D'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly table */}
        <div className="chart-card">
          <div className="card-header">
            <h2>Monthly summary</h2>
          </div>
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Payout</th>
                <th>Ach %</th>
                <th>MoM</th>
              </tr>
            </thead>
            <tbody>
              {enriched.map((m, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{m.month}</td>
                  <td>₹{(m.payout/1e6).toFixed(2)}M</td>
                  <td>{m.achievement}%</td>
                  <td style={{ color: !m.mom ? '#999' : m.mom >= 0 ? '#2D6A0F' : '#A32D2D', fontWeight: 600 }}>
                    {m.mom ? `${m.mom > 0 ? '+' : ''}${m.mom}%` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Trends;