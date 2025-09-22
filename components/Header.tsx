
import React from 'react';
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
  return (
    <header className="bg-navy-900/50 backdrop-blur-sm sticky top-0 z-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-navy-700">
          <div className="flex items-center">
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
