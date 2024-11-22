import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Prize {
  option: string;
  value: number;
  probability: number;
}

export default function CampaignCreator() {
  const [campaign, setCampaign] = useState({
    name: '',
    advertiser: {
      name: '',
      instagram: '',
      tagline: '',
      media: [] as string[],
    },
    prizes: [] as Prize[],
    theme: {
      primaryColor: '#10B981',
      secondaryColor: '#064E3B',
    },
  });

  const addPrize = () => {
    setCampaign(prev => ({
      ...prev,
      prizes: [...prev.prizes, { option: '', value: 0, probability: 0 }],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle campaign creation
    console.log('Campaign created:', campaign);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Campaign Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
              <input
                type="text"
                value={campaign.name}
                onChange={(e) => setCampaign(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300"
                required
              />
            </div>
          </div>
        </div>

        {/* Advertiser Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Advertiser Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Brand Name</label>
              <input
                type="text"
                value={campaign.advertiser.name}
                onChange={(e) => setCampaign(prev => ({
                  ...prev,
                  advertiser: { ...prev.advertiser, name: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram Handle</label>
              <input
                type="text"
                value={campaign.advertiser.instagram}
                onChange={(e) => setCampaign(prev => ({
                  ...prev,
                  advertiser: { ...prev.advertiser, instagram: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tagline</label>
              <input
                type="text"
                value={campaign.advertiser.tagline}
                onChange={(e) => setCampaign(prev => ({
                  ...prev,
                  advertiser: { ...prev.advertiser, tagline: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Prize Wheel Configuration */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Prize Wheel</h3>
          <div className="space-y-4">
            {campaign.prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <input
                  type="text"
                  placeholder="Prize name"
                  value={prize.option}
                  onChange={(e) => {
                    const newPrizes = [...campaign.prizes];
                    newPrizes[index].option = e.target.value;
                    setCampaign(prev => ({ ...prev, prizes: newPrizes }));
                  }}
                  className="flex-1"
                />
                <input
                  type="number"
                  placeholder="Value"
                  value={prize.value}
                  onChange={(e) => {
                    const newPrizes = [...campaign.prizes];
                    newPrizes[index].value = Number(e.target.value);
                    setCampaign(prev => ({ ...prev, prizes: newPrizes }));
                  }}
                  className="w-24"
                />
                <input
                  type="number"
                  placeholder="Probability %"
                  value={prize.probability}
                  onChange={(e) => {
                    const newPrizes = [...campaign.prizes];
                    newPrizes[index].probability = Number(e.target.value);
                    setCampaign(prev => ({ ...prev, prizes: newPrizes }));
                  }}
                  className="w-32"
                />
              </motion.div>
            ))}
            <button
              type="button"
              onClick={addPrize}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Add Prize
            </button>
          </div>
        </div>

        {/* Theme Customization */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Theme Colors</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Primary Color</label>
              <input
                type="color"
                value={campaign.theme.primaryColor}
                onChange={(e) => setCampaign(prev => ({
                  ...prev,
                  theme: { ...prev.theme, primaryColor: e.target.value }
                }))}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Secondary Color</label>
              <input
                type="color"
                value={campaign.theme.secondaryColor}
                onChange={(e) => setCampaign(prev => ({
                  ...prev,
                  theme: { ...prev.theme, secondaryColor: e.target.value }
                }))}
                className="mt-1 block w-full"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
}