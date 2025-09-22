import React from 'react';
import Card from '../components/common/Card';

const Settings: React.FC = () => {
  return (
    <div className="animate-enter">
      <Card title="System Settings">
        <div className="p-8 text-center text-slate-500">
            <h2 className="text-xl font-semibold text-white mb-2">Settings Page</h2>
            <p>User preferences, notification settings, and system configurations will be available here in a future update.</p>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
