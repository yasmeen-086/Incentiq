# 💳 IncentIQ — Enterprise Incentive Dashboard

A polished React dashboard for visualizing sales incentive data — KPIs, payout trends, anomaly detection, and agent leaderboards. Built as the frontend companion to [PayPulse](https://github.com/yasmeen-086/pay-pulse), a Python-based incentive analytics backend.

**Live demo:** [incentiq-gamma.vercel.app](https://incentiq-gamma.vercel.app)

---

## What it does

IncentIQ visualizes FY2024 incentive compensation data for 150 sales agents across 5 regions:

- **Dashboard** — KPI cards, monthly payout trend, region performance
- **Trends** — payout vs achievement toggle, MoM growth analysis
- **Agents** — searchable, filterable agent directory
- **Anomalies** — Z-score flagged payout irregularities with severity levels
- **Leaderboard** — top performer rankings with podium view
- **Settings** — persisted user preferences via localStorage

---

## Why I built this

This project simulates the kind of incentive management dashboard used by Enterprise Incentive Servicing teams — visualizing payout health, catching anomalies, and surfacing performance trends for business users.

---

## Tech stack

- **React** — component architecture, hooks (useState)
- **Recharts** — bar charts, line charts
- **Lucide React** — icon system
- **CSS** — custom design system, no framework
- **Vercel** — deployment

---

## Run locally

```bash
git clone https://github.com/yasmeen-086/incentiq.git
cd incentiq
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Related project

[PayPulse](https://github.com/yasmeen-086/pay-pulse) — the Python/GenAI backend this dashboard is designed to sit on top of. Built with SQL, Pandas, RAG, and Claude API for incentive analytics and anomaly detection.
