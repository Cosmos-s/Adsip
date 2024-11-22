import React from 'react';
import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">Adsip</span>
            </div>
            <p className="text-gray-400">
              Transforming paper cups into powerful marketing tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-500">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-500">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-emerald-500">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@adsip.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                123 Ad Street, Marketing City
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adsip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}