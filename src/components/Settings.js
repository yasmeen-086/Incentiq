import React, { useState } from 'react';

function Settings() {
  const [name, setName]       = useState('Jass');
  const [role, setRole]       = useState('Analyst');
  const [theme, setTheme]     = useState('light');
  const [currency, setCurrency] = useState('INR');
  const [alerts, setAlerts]   = useState(true);
  const [saved, setSaved]     = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Settings</h1>
          <p className="dashboard-sub">Manage your preferences</p>
        </div>
        <button
          onClick={handleSave}
          style={{
            padding: '8px 20px', borderRadius: 8, border: 'none',
            background: saved ? '#2D6A0F' : '#1C5FAF', color: 'white',
            fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s'
          }}
        >{saved ? '✓ Saved!' : 'Save Changes'}</button>
      </div>

      {/* Profile */}
      <div className="chart-card" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: '#1A1917' }}>Profile</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <p style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 500 }}>Display Name</p>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: '100%', padding: '9px 12px',
                border: '1px solid #E8E5DC', borderRadius: 8,
                fontSize: 13, outline: 'none'
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: 12, color: '#888', marginBottom: 6, fontWeight: 500 }}>Role</p>
            <input
              value={role}
              onChange={e => setRole(e.target.value)}
              style={{
                width: '100%', padding: '9px 12px',
                border: '1px solid #E8E5DC', borderRadius: 8,
                fontSize: 13, outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="chart-card" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: '#1A1917' }}>Preferences</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Currency */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#1A1917' }}>Currency</p>
              <p style={{ fontSize: 12, color: '#888' }}>Display currency for payout values</p>
            </div>
            <select
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              style={{
                padding: '7px 12px', border: '1px solid #E8E5DC',
                borderRadius: 8, fontSize: 13, outline: 'none', background: 'white'
              }}
            >
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
            </select>
          </div>

          {/* Anomaly alerts */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #F0EDE6' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#1A1917' }}>Anomaly Alerts</p>
              <p style={{ fontSize: 12, color: '#888' }}>Show alerts for flagged payout records</p>
            </div>
            <div
              onClick={() => setAlerts(!alerts)}
              style={{
                width: 44, height: 24, borderRadius: 999, cursor: 'pointer',
                background: alerts ? '#1C5FAF' : '#E8E5DC',
                position: 'relative', transition: 'background 0.2s'
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: '50%', background: 'white',
                position: 'absolute', top: 3,
                left: alerts ? 23 : 3,
                transition: 'left 0.2s'
              }} />
            </div>
          </div>

        </div>
      </div>

      {/* About */}
      <div className="chart-card">
        <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: '#1A1917' }}>About IncentIQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Version',     '1.0.0'],
            ['Built with',  'React, Recharts, Lucide'],
            ['Data',        'FY2024 · 150 agents · 5 regions'],
            ['GitHub',      'github.com/yasmeen-086'],
          ].map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, borderBottom: '1px solid #F8F7F3' }}>
              <span style={{ fontSize: 13, color: '#888' }}>{label}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#1A1917' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Settings;