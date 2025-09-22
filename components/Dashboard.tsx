
import React, { useState } from 'react';
import { User, Page } from '../types';
import Header from './Header';
import { useTrafficData } from '../hooks/useTrafficData';
import TrafficLightModal from './TrafficLightModal';
import Sidebar from './layout/Sidebar';
import DashboardOverview from '../pages/DashboardOverview';
import LiveMapPage from '../pages/LiveMapPage';
import AnalyticsHub from '../pages/AnalyticsHub';
import DeviceManagement from '../pages/DeviceManagement';
import Settings from '../pages/Settings';
import { DEVICES } from '../constants';


interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [currentPage, setCurrentPage] = useState<Page>('overview');
  const trafficData = useTrafficData();
  
  const renderPage = () => {
    switch(currentPage) {
        case 'overview':
            return <DashboardOverview {...trafficData} />;
        case 'map':
            return <LiveMapPage {...trafficData} />;
        case 'analytics':
            return <AnalyticsHub {...trafficData} />;
        case 'devices':
            return <DeviceManagement devices={DEVICES} />;
        case 'settings':
            return <Settings />;
        default:
            return <DashboardOverview {...trafficData} />;
    }
  }

  return (
    <div className="flex h-screen bg-navy-900">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} currentPage={currentPage} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-navy-900 p-4 lg:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
