import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CampaignsList() {
  // Example campaigns data - In real app, fetch from backend
  const campaigns = [
    {
      id: '1',
      name: 'OG Kicks Giveaway',
      status: 'active',
      participants: 156,
      winners: 12,
      createdAt: '2024-03-10',
    },
    {
      id: '2',
      name: 'Summer Collection Launch',
      status: 'scheduled',
      participants: 0,
      winners: 0,
      createdAt: '2024-03-15',
    },
  ];

  const handleDelete = (id: string) => {
    // Handle campaign deletion
    console.log('Delete campaign:', id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Campaigns</h2>
        <Link
          to="/admin/create"
          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
        >
          Create New Campaign
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Participants
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Winners
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign, index) => (
              <motion.tr
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.participants}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.winners}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {campaign.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <Link
                      to={`/campaign/${campaign.id}`}
                      className="text-emerald-600 hover:text-emerald-900"
                      target="_blank"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(campaign.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}