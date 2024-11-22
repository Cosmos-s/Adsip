import React from 'react';
import { QrCode, BarChart3, Coffee, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Coffee className="h-8 w-8 text-emerald-600" />,
      title: 'Cup Advertising',
      description: 'Strategic placement of your ads on paper cups distributed to high-traffic cafes and tea shops.'
    },
    {
      icon: <QrCode className="h-8 w-8 text-emerald-600" />,
      title: 'QR Integration',
      description: 'Smart QR codes on every cup for seamless digital engagement and campaign tracking.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: 'Campaign Analytics',
      description: 'Detailed insights and metrics to measure your campaign\'s performance and reach.'
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: 'Targeted Distribution',
      description: 'Strategic distribution network ensuring your ads reach the right audience.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Innovative solutions for your advertising needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}