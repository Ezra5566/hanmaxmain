import React, { useState, useEffect } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon, ShieldCheckIcon, } from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const guardData = [
  { name: 'HQ', value: 15 },
  { name: 'Branch 1', value: 8 },
  { name: 'Branch 2', value: 10 },
];

const clientData = [
  { name: 'Company A', value: 5 },
  { name: 'Company B', value: 8 },
  { name: 'Company C', value: 3 },
];

const adminStats = {
  totalGuards: 50,
  totalClients: 20,
  pendingReports: 5,
  unresolvedIssues: 3,
};

const AdminDashboard = () => {
  const [guards, setGuards] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch guards and clients data (replace with API calls)
    const fetchedGuards = [
      { id: 1, name: 'John Doe', status: 'Active', assignedClient: 'Company A' },
      { id: 2, name: 'Jane Smith', status: 'On Leave', assignedClient: 'Company B' },
      { id: 3, name: 'Mark Davis', status: 'Active', assignedClient: 'Company A' },
    ];
    const fetchedClients = [
      { id: 1, name: 'Company A', totalGuards: 5 },
      { id: 2, name: 'Company B', totalGuards: 8 },
      { id: 3, name: 'Company C', totalGuards: 3 },
    ];
    setGuards(fetchedGuards);
    setClients(fetchedClients);
    setLoading(false);
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
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card 
          title="Total Guards" 
          value={adminStats.totalGuards} 
          icon={ShieldCheckIcon}
          subtext="Across all branches"
        />
        <Card 
          title="Total Clients" 
          value={adminStats.totalClients} 
          icon={BriefcaseIcon}
          subtext="Registered companies"
        />
        <Card 
          title="Pending Reports" 
          value={adminStats.pendingReports} 
          icon={DocumentReportIcon}
          subtext="Awaiting review" 
        />
        <Card 
          title="Unresolved Issues" 
          value={adminStats.unresolvedIssues} 
          icon={ClipboardListIcon}
          subtext="Requires attention" 
        />
      </div>

      {/* Guards and Clients Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Guards Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={guardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Clients Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={clientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Guards and Clients Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Guards List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {guards.map((guard) => (
                <li key={guard.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium">{guard.name}</p>
                    <p className="text-sm text-gray-500">Status: {guard.status}</p>
                    <p className="text-sm text-gray-500">Assigned to: {guard.assignedClient}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Clients List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {clients.map((client) => (
                <li key={client.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium">{client.name}</p>
                    <p className="text-sm text-gray-500">Total Guards: {client.totalGuards}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
