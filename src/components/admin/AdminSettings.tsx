import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    notifyWinners: true,
    autoPayouts: false,
    maxSpinsPerIP: 1,
    paymentMethods: {
      upi: true,
      bankTransfer: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings update
    console.log('Settings updated:', settings);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-700">Notify Winners</label>
                <p className="text-sm text-gray-500">Send email notifications to winners</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifyWinners}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    notifyWinners: e.target.checked
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-700">Automatic Payouts</label>
                <p className="text-sm text-gray-500">Process payouts automatically</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoPayouts}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    autoPayouts: e.target.checked
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Max Spins per IP</label>
              <input
                type="number"
                min="1"
                value={settings.maxSpinsPerIP}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  maxSpinsPerIP: parseInt(e.target.value)
                }))}
                className="mt-1 block w-full rounded-md border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-700">UPI Payments</label>
                <p className="text-sm text-gray-500">Enable UPI payment method</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.paymentMethods.upi}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    paymentMethods: {
                      ...prev.paymentMethods,
                      upi: e.target.checked
                    }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-700">Bank Transfer</label>
                <p className="text-sm text-gray-500">Enable bank transfer method</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.paymentMethods.bankTransfer}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    paymentMethods: {
                      ...prev.paymentMethods,
                      bankTransfer: e.target.checked
                    }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Settings
        </button>
      </form>
    </div>
  );
}