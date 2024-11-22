import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Every Cup into an
            <span className="text-emerald-600"> Advertising Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We transform ordinary paper cups into powerful marketing tools, reaching customers at local cafes and tea shops with targeted advertising campaigns.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
            Start Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}