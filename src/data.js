export const kpiData = [
    { label: "Total Payout", value: "₹4.01 Cr", sub: "Annual disbursed", trend: "+12.4%", up: true },
    { label: "Avg Achievement", value: "95.3%", sub: "vs 100% target", trend: "+2.1%", up: true },
    { label: "Total Deals", value: "4,160", sub: "FY2024", trend: "+8.7%", up: true },
    { label: "Active Agents", value: "150", sub: "Across 5 regions", trend: "0%", up: true },
    { label: "Anomalies", value: "6", sub: "Needs review", trend: "+2", up: false },
    { label: "Pending Payout", value: "₹7.0L", sub: "Yet to disburse", trend: "-5.2%", up: true },
  ];
  
  export const monthlyData = [
    { month: "Jan", payout: 3178640, achievement: 94.2 },
    { month: "Feb", payout: 3178083, achievement: 93.8 },
    { month: "Mar", payout: 3462951, achievement: 96.1 },
    { month: "Apr", payout: 2961375, achievement: 91.5 },
    { month: "May", payout: 3165202, achievement: 94.7 },
    { month: "Jun", payout: 3117184, achievement: 93.9 },
    { month: "Jul", payout: 3573561, achievement: 97.2 },
    { month: "Aug", payout: 3245701, achievement: 95.1 },
    { month: "Sep", payout: 3984363, achievement: 99.3 },
    { month: "Oct", payout: 3225169, achievement: 94.8 },
    { month: "Nov", payout: 3073704, achievement: 93.2 },
    { month: "Dec", payout: 3948916, achievement: 98.7 },
  ];
  
  export const regionData = [
    { region: "East",    achievement: 97.1, payout: 11334770, agents: 39 },
    { region: "North",   achievement: 96.0, payout: 6551153,  agents: 27 },
    { region: "Central", achievement: 95.3, payout: 9664599,  agents: 36 },
    { region: "West",    achievement: 94.3, payout: 6869634,  agents: 27 },
    { region: "South",   achievement: 92.1, payout: 5694694,  agents: 21 },
  ];
  
  export const leaderboardData = [
    { rank: 1,  name: "Warhi Subramaniam", grade: "Lead",   region: "Central", payout: 581782, achievement: 98.4 },
    { rank: 2,  name: "Udant Raj",         grade: "Lead",   region: "Central", payout: 581782, achievement: 97.9 },
    { rank: 3,  name: "Maya Narayan",      grade: "Lead",   region: "Central", payout: 581782, achievement: 97.6 },
    { rank: 4,  name: "Anjali Pingle",     grade: "Lead",   region: "East",    payout: 565402, achievement: 96.8 },
    { rank: 5,  name: "Vrinda Ganguly",    grade: "Lead",   region: "East",    payout: 565402, achievement: 96.5 },
    { rank: 6,  name: "Luke Kari",         grade: "Lead",   region: "East",    payout: 558241, achievement: 95.9 },
    { rank: 7,  name: "Priya Menon",       grade: "Senior", region: "North",   payout: 421830, achievement: 95.2 },
    { rank: 8,  name: "Arjun Sharma",      grade: "Senior", region: "West",    payout: 398450, achievement: 94.8 },
    { rank: 9,  name: "Sneha Iyer",        grade: "Senior", region: "South",   payout: 376920, achievement: 94.1 },
    { rank: 10, name: "Rohan Kapoor",      grade: "Senior", region: "East",    payout: 365100, achievement: 93.7 },
  ];
  
  export const anomalyData = [
    { agent: "Chakradev Goswami", month: "Dec", payout: 48679,  severity: "HIGH",   reason: "Payout 2.8x above norm — review required", zscore: 3.21 },
    { agent: "Hitesh Baral",      month: "Jul", payout: 35117,  severity: "HIGH",   reason: "Payout 4.2x above agent monthly average",   zscore: 3.20 },
    { agent: "Ekalinga Nagarajan",month: "Jan", payout: -6451,  severity: "HIGH",   reason: "Negative payout — possible clawback event",  zscore: 2.57 },
    { agent: "Tejas Goyal",       month: "Oct", payout: 70270,  severity: "MEDIUM", reason: "High payout with below-threshold sales",     zscore: 2.87 },
    { agent: "Orinder Choudhury", month: "Mar", payout: 0,      severity: "MEDIUM", reason: "Zero payout despite 95%+ achievement",       zscore: 1.92 },
    { agent: "Orinder Choudhury", month: "Apr", payout: 0,      severity: "MEDIUM", reason: "Zero payout despite 95%+ achievement",       zscore: 1.92 },
  ];