import React from 'react';
import { Page } from '../../types';
import { DashboardIcon, MapIcon, AnalyticsIcon, DevicesIcon, SettingsIcon } from '../common/Icons';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  page: Page;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <li>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`
        flex items-center p-3 my-1 rounded-lg text-slate-400 transition-colors
        hover:bg-navy-700 hover:text-white group relative
        ${isActive ? 'bg-cyan-600/20 text-cyan-400' : ''}
      `}
    >
      {icon}
      <span className="
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-navy-900 text-white text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        whitespace-nowrap z-50
      ">
        {label}
      </span>
      {isActive && <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-cyan-400 rounded-r-full"></div>}
    </a>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { icon: <DashboardIcon className="w-6 h-6" />, label: 'Overview', page: 'overview' as Page },
    { icon: <MapIcon className="w-6 h-6" />, label: 'Live Map', page: 'map' as Page },
    { icon: <AnalyticsIcon className="w-6 h-6" />, label: 'Analytics', page: 'analytics' as Page },
    { icon: <DevicesIcon className="w-6 h-6" />, label: 'Devices', page: 'devices' as Page },
    { icon: <SettingsIcon className="w-6 h-6" />, label: 'Settings', page: 'settings' as Page },
  ];

  return (
    <aside className="w-20 bg-navy-800 border-r border-navy-700 flex flex-col items-center p-2">
      <div className="text-cyan-400 font-bold text-2xl my-4">
        🚦
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.page}
              icon={item.icon}
              label={item.label}
              page={item.page}
              isActive={currentPage === item.page}
              onClick={() => setCurrentPage(item.page)}
            />
          ))}
        </ul>
      </nav>
      <div className="mt-auto mb-4">
        {/* Can add user avatar or other bottom items here */}
      </div>
    </aside>
  );
};

export default Sidebar;
