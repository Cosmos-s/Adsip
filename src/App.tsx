import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';
import CampaignPage from './components/campaigns/CampaignPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Auth0Provider
      domain="your-auth0-domain.auth0.com"
      clientId="your-client-id"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Main website */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">
                <Navbar />
                <Hero />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
              </div>
            }
          />

          {/* Admin Dashboard - Protected Route */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Campaign Pages */}
          <Route path="/campaign/:id" element={<CampaignPage />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;