import React, { useState } from 'react';
import { anomalyData } from '../data';
import { AlertTriangle, TrendingDown, TrendingUp, Search } from 'lucide-react';

function Anomalies() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = anomalyData.filter(a => {
    const matchFilter = filter === 'All' || a.severity === filter;
    const matchSearch = a.agent.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const highCount   = anomalyData.filter(a => a.severity === 'HIGH').length;
  const mediumCount = anomalyData.filter(a => a.severity === 'MEDIUM').length;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Anomaly Alerts</h1>
          <p className="dashboard-sub">Payout irregularities detected by Z-score engine · FY2024</p>
        </div>
        <span className="live-badge">● {anomalyData.length} flagged</span>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
        <div className="kpi-card" style={{ borderLeft: '3px solid #DC2626' }}>
          <p className="kpi-label">High Severity</p>
          <p className="kpi-value" style={{ color: '#DC2626' }}>{highCount}</p>
          <p className="kpi-sub">Immediate review needed</p>
        </div>
        <div className="kpi-card" style={{ borderLeft: '3px solid #D97706' }}>
          <p className="kpi-label">Medium Severity</p>
          <p className="kpi-value" style={{ color: '#D97706' }}>{mediumCount}</p>
          <p className="kpi-sub">Monitor closely</p>
        </div>
        <div className="kpi-card" style={{ borderLeft: '3px solid #2D6A0F' }}>
          <p className="kpi-label">Detection Method</p>
          <p className="kpi-value" style={{ fontSize: 16, marginTop: 6 }}>Z-score</p>
          <p className="kpi-sub">Threshold: 2.5σ</p>
        </div>
      </div>

      {/* Filters */}
      <div className="chart-card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder="Search agent..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '8px 8px 8px 32px',
                border: '1px solid #E8E5DC', borderRadius: 8,
                fontSize: 13, outline: 'none', background: '#FAFAF8'
              }}
            />
          </div>
          {['All', 'HIGH', 'MEDIUM'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '7px 16px', borderRadius: 999,
                border: '1px solid', fontSize: 12, cursor: 'pointer', fontWeight: 500,
                borderColor: filter === f ? '#1C5FAF' : '#E8E5DC',
                background:  filter === f ? '#E6F1FB' : 'white',
                color:       filter === f ? '#1C5FAF' : '#666',
              }}
            >{f}</button>
          ))}
        </div>
      </div>

      {/* Anomaly cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.length === 0 ? (
          <div className="chart-card" style={{ textAlign: 'center', color: '#888', padding: 40 }}>
            No anomalies found
          </div>
        ) : (
          filtered.map((a, i) => (
            <div key={i} className="chart-card" style={{
              borderLeft: `4px solid ${a.severity === 'HIGH' ? '#DC2626' : '#D97706'}`,
              padding: '16px 20px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <AlertTriangle size={16} color={a.severity === 'HIGH' ? '#DC2626' : '#D97706'} />
                    <span style={{ fontWeight: 600, fontSize: 15, color: '#1A1917' }}>{a.agent}</span>
                    <span className={`badge badge-${a.severity.toLowerCase()}`}>{a.severity}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#555', marginBottom: 10, lineHeight: 1.5 }}>{a.reason}</p>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <div>
                      <p style={{ fontSize: 11, color: '#888', marginBottom: 2 }}>MONTH</p>
                      <p style={{ fontSize: 13, fontWeight: 600 }}>{a.month}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#888', marginBottom: 2 }}>PAYOUT</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: a.payout < 0 ? '#DC2626' : '#1A1917' }}>
                        ₹{a.payout.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#888', marginBottom: 2 }}>Z-SCORE</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: a.zscore > 3 ? '#DC2626' : '#D97706' }}>
                        {a.zscore}σ
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{
                  background: a.severity === 'HIGH' ? '#FEF2F2' : '#FFFBEB',
                  borderRadius: 8, padding: '8px 14px', textAlign: 'center', minWidth: 80
                }}>
                  <p style={{ fontSize: 11, color: '#888', marginBottom: 4 }}>RISK</p>
                  <p style={{ fontSize: 18, fontWeight: 700, color: a.severity === 'HIGH' ? '#DC2626' : '#D97706' }}>
                    {a.severity === 'HIGH' ? 'High' : 'Med'}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Anomalies;