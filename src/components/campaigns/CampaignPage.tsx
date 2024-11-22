import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wheel } from 'react-custom-roulette';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface WinnerFormData {
  name: string;
  email: string;
  phone: string;
  upiId: string;
}

export default function CampaignPage() {
  const { id } = useParams();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<WinnerFormData>({
    name: '',
    email: '',
    phone: '',
    upiId: '',
  });

  // Example campaign data - In real app, fetch this based on campaign ID
  const campaign = {
    name: "OG Kicks Giveaway",
    tagline: "Jahan Style Wahan Comfort Bhi",
    instagram: "ogkicks",
    prizes: [
      { option: '₹500', style: { backgroundColor: '#10B981', textColor: 'white' } },
      { option: '₹100', style: { backgroundColor: '#059669', textColor: 'white' } },
      { option: '₹1000', style: { backgroundColor: '#047857', textColor: 'white' } },
      { option: 'Try Again', style: { backgroundColor: '#064E3B', textColor: 'white' } },
    ],
    media: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    ],
  };

  const handleSpinClick = () => {
    if (!hasSpun) {
      const newPrizeNumber = Math.floor(Math.random() * campaign.prizes.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    setHasSpun(true);
    if (campaign.prizes[prizeNumber].option !== 'Try Again') {
      setShowForm(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle winner form submission
    console.log('Winner details:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Spin Wheel */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{campaign.name}</h1>
              <p className="text-xl mb-8">{campaign.tagline}</p>
              <button
                onClick={handleSpinClick}
                disabled={hasSpun}
                className={`px-8 py-4 rounded-full text-lg font-semibold ${
                  hasSpun
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-white text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {hasSpun ? 'Already Played' : 'Spin & Win'}
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64">
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={campaign.prizes}
                  onStopSpinning={handleSpinStop}
                  backgroundColors={['#10B981', '#059669', '#047857', '#064E3B']}
                  textColors={['white']}
                  outerBorderColor="#064E3B"
                  outerBorderWidth={3}
                  innerRadius={0}
                  radiusLineColor="#064E3B"
                  radiusLineWidth={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winner Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Congratulations! 🎉</h2>
          <p className="mb-4">You've won {campaign.prizes[prizeNumber].option}! Fill in your details to claim.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">UPI ID</label>
              <input
                type="text"
                value={formData.upiId}
                onChange={(e) => setFormData(prev => ({ ...prev, upiId: e.target.value }))}
                required
                className="mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Submit
            </button>
          </form>
        </motion.div>
      )}

      {/* Advertisement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <a
            href={`https://instagram.com/${campaign.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @{campaign.instagram}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaign.media.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img src={url} alt="Product" className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}