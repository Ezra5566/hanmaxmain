import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheckIcon, DocumentTextIcon, CalendarIcon, BellIcon } from '@heroicons/react/24/outline';

// Dummy data for the chart
const initialData = [
  { name: 'Jan', value: 5000 },
  { name: 'Feb', value: 3500 },
  { name: 'Mar', value: 2800 },
  { name: 'Apr', value: 2200 },
  { name: 'May', value: 4100 },
  { name: 'Jun', value: 3200 },
];

const GuardDashboard = () => {
  const [chartData, setChartData] = useState(initialData);
  const [summaryData, setSummaryData] = useState({
    currentShifts: 0,
    completedReports: 0,
    upcomingShifts: 0,
    alerts: 0,
  });

  useEffect(() => {
    // Simulate fetching data from an API for the guard
    setSummaryData({
      currentShifts: 5,
      completedReports: 12,
      upcomingShifts: 8,
      alerts: 3,
    });
  }, []);

  const Card = ({ title, value, icon: Icon, subtext }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className="h-6 w-6 text-green-500" />
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{subtext}</p>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Guard Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card 
          title="Current Shifts" 
          value={summaryData.currentShifts} 
          icon={ShieldCheckIcon}
          subtext="+1 from last week" 
        />
        <Card 
          title="Completed Reports" 
          value={summaryData.completedReports} 
          icon={DocumentTextIcon}
          subtext="No pending reports" 
        />
        <Card 
          title="Upcoming Shifts" 
          value={summaryData.upcomingShifts} 
          icon={CalendarIcon}
          subtext="For the next 7 days" 
        />
        <Card 
          title="Alerts" 
          value={summaryData.alerts} 
          icon={BellIcon}
          subtext="2 critical" 
        />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span>Shift completed at HQ</span>
            <span className="text-sm text-gray-500">3 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Incident report filed</span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Upcoming shift at client site</span>
            <span className="text-sm text-gray-500">Tomorrow</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GuardDashboard;

