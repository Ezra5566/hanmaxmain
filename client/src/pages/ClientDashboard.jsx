// ClientDashboard.js
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserGroupIcon, DocumentTextIcon, CalendarIcon, BellIcon } from '@heroicons/react/24/outline';

// Dummy data for the chart
const initialData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const ClientDashboard = () => {
  const [chartData, setChartData] = useState(initialData);
  const [summaryData, setSummaryData] = useState({
    activeGuards: 0,
    pendingRequests: 0,
    upcomingShifts: 0,
    alerts: 0,
  });

  // Simulate fetching data from an API
  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    setSummaryData({
      activeGuards: 12,
      pendingRequests: 3,
      upcomingShifts: 24,
      alerts: 7,
    });
  }, []);

  const Card = ({ title, value, icon: Icon, subtext }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{subtext}</p>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Client Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card 
          title="Active Guards" 
          value={summaryData.activeGuards} 
          icon={UserGroupIcon}
          subtext="+2 from last month" 
        />
        <Card 
          title="Pending Requests" 
          value={summaryData.pendingRequests} 
          icon={DocumentTextIcon}
          subtext="-1 from last week" 
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
          subtext="2 require attention" 
        />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Security Expenses</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>New guard assigned to HQ</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Security request approved</span>
              <span className="text-sm text-gray-500">Yesterday</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Monthly report generated</span>
              <span className="text-sm text-gray-500">2 days ago</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Request New Guard
            </button>
            <button className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-50 transition duration-300">
              View All Guards
            </button>
            <button className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-50 transition duration-300">
              Generate Report
            </button>
            <button className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-50 transition duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;