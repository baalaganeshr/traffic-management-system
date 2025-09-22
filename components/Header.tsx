
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Page } from '../types';

interface HeaderProps {
  user: User;
  currentPage: Page;
}

const pageTitles: Record<Page, string> = {
    overview: 'Dashboard Overview',
    map: 'Live Traffic Map',
    analytics: 'Analytics Hub',
    devices: 'Device Management',
    settings: 'Settings'
}

const Header: React.FC<HeaderProps> = ({ user, currentPage }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <header className="bg-navy-900/50 backdrop-blur-sm sticky top-0 z-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-navy-700">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:bg-navy-800 rounded-lg transition-colors duration-200"
              title="Back to VIN Home"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
            <div className="h-6 w-px bg-navy-700"></div>
            <h1 className="text-xl font-bold text-white">{pageTitles[currentPage]}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-white">{user.email}</p>
              <p className="text-xs text-cyan-400">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
