import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PlusCircle, LayoutGrid, Settings } from 'lucide-react';
import CampaignCreator from './CampaignCreator';
import CampaignsList from './CampaignsList';
import AdminSettings from './AdminSettings';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white w-64 shadow-lg ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin/create"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Create Campaign
          </Link>
          <Link
            to="/admin/campaigns"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <LayoutGrid className="w-5 h-5 mr-2" />
            Campaigns
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/create" element={<CampaignCreator />} />
          <Route path="/campaigns" element={<CampaignsList />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
}