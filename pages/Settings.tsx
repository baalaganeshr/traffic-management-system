import React, { useState } from 'react';
import Card from '../components/common/Card';

interface SettingsState {
  notifications: {
    emergencyAlerts: boolean;
    trafficUpdates: boolean;
    systemMaintenance: boolean;
    emailNotifications: boolean;
  };
  display: {
    darkMode: boolean;
    autoRefresh: boolean;
    refreshInterval: number;
    showAnimations: boolean;
  };
  traffic: {
    defaultView: string;
    congestionThreshold: number;
    emergencyPriority: boolean;
    autoSignalOptimization: boolean;
  };
  system: {
    language: string;
    timezone: string;
    dataRetention: number;
    backupFrequency: string;
  };
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    notifications: {
      emergencyAlerts: true,
      trafficUpdates: true,
      systemMaintenance: false,
      emailNotifications: true,
    },
    display: {
      darkMode: true,
      autoRefresh: true,
      refreshInterval: 30,
      showAnimations: true,
    },
    traffic: {
      defaultView: 'map',
      congestionThreshold: 70,
      emergencyPriority: true,
      autoSignalOptimization: true,
    },
    system: {
      language: 'en',
      timezone: 'UTC-8',
      dataRetention: 30,
      backupFrequency: 'daily',
    },
  });

  const [activeTab, setActiveTab] = useState('notifications');

  const updateSetting = (category: keyof SettingsState, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

  const ToggleSwitch: React.FC<{ checked: boolean; onChange: (checked: boolean) => void; label: string; description?: string }> = 
    ({ checked, onChange, label, description }) => (
      <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
        <div className="flex-1">
          <label className="text-white font-medium cursor-pointer">{label}</label>
          {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
        </div>
        <div 
          className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${
            checked ? 'bg-blue-600' : 'bg-gray-600'
          }`}
          onClick={() => onChange(!checked)}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              checked ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </div>
      </div>
    );

  const NumberInput: React.FC<{ value: number; onChange: (value: number) => void; label: string; min?: number; max?: number; unit?: string }> = 
    ({ value, onChange, label, min = 0, max = 100, unit = '' }) => (
      <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
        <label className="text-white font-medium">{label}</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-20 px-3 py-1 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
          {unit && <span className="text-gray-400 text-sm">{unit}</span>}
        </div>
      </div>
    );

  const SelectInput: React.FC<{ value: string; onChange: (value: string) => void; label: string; options: { value: string; label: string }[] }> = 
    ({ value, onChange, label, options }) => (
      <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
        <label className="text-white font-medium">{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-1 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );

  const tabs = [
    { id: 'notifications', label: '🔔 Notifications', icon: '🔔' },
    { id: 'display', label: '🎨 Display', icon: '🎨' },
    { id: 'traffic', label: '🚦 Traffic', icon: '🚦' },
    { id: 'system', label: '⚙️ System', icon: '⚙️' },
  ];

  return (
    <div className="animate-enter space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">⚙️ System Settings</h1>
        <p className="text-gray-400">Configure your Smart Traffic Management System preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeTab === 'notifications' && (
          <>
            <Card title="🔔 Alert Preferences" className="h-fit">
              <div className="space-y-1">
                <ToggleSwitch
                  checked={settings.notifications.emergencyAlerts}
                  onChange={(val) => updateSetting('notifications', 'emergencyAlerts', val)}
                  label="Emergency Alerts"
                  description="Receive immediate notifications for traffic emergencies"
                />
                <ToggleSwitch
                  checked={settings.notifications.trafficUpdates}
                  onChange={(val) => updateSetting('notifications', 'trafficUpdates', val)}
                  label="Traffic Updates"
                  description="Get notified about traffic congestion changes"
                />
                <ToggleSwitch
                  checked={settings.notifications.systemMaintenance}
                  onChange={(val) => updateSetting('notifications', 'systemMaintenance', val)}
                  label="System Maintenance"
                  description="Alerts for scheduled system maintenance"
                />
                <ToggleSwitch
                  checked={settings.notifications.emailNotifications}
                  onChange={(val) => updateSetting('notifications', 'emailNotifications', val)}
                  label="Email Notifications"
                  description="Send notifications to your registered email"
                />
              </div>
            </Card>

            <Card title="📱 Notification Status" className="h-fit">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-green-400 font-semibold">System Online</div>
                      <div className="text-gray-400 text-sm">All notification services active</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Last Emergency Alert:</span>
                    <span className="text-white">2 hours ago</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Total Alerts Today:</span>
                    <span className="text-white">12</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Notification Queue:</span>
                    <span className="text-white">3 pending</span>
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}

        {activeTab === 'display' && (
          <>
            <Card title="🎨 Interface Settings" className="h-fit">
              <div className="space-y-1">
                <ToggleSwitch
                  checked={settings.display.darkMode}
                  onChange={(val) => updateSetting('display', 'darkMode', val)}
                  label="Dark Mode"
                  description="Use dark theme for better visibility at night"
                />
                <ToggleSwitch
                  checked={settings.display.autoRefresh}
                  onChange={(val) => updateSetting('display', 'autoRefresh', val)}
                  label="Auto Refresh"
                  description="Automatically update traffic data"
                />
                <NumberInput
                  value={settings.display.refreshInterval}
                  onChange={(val) => updateSetting('display', 'refreshInterval', val)}
                  label="Refresh Interval"
                  min={5}
                  max={300}
                  unit="seconds"
                />
                <ToggleSwitch
                  checked={settings.display.showAnimations}
                  onChange={(val) => updateSetting('display', 'showAnimations', val)}
                  label="Show Animations"
                  description="Enable smooth transitions and animations"
                />
              </div>
            </Card>

            <Card title="📊 Display Preview" className="h-fit">
              <div className="space-y-4">
                <div className="text-center p-6 bg-gray-800 rounded-lg">
                  <div className="text-2xl mb-2">🌙</div>
                  <div className="text-white font-semibold mb-1">
                    {settings.display.darkMode ? 'Dark Mode Active' : 'Light Mode Active'}
                  </div>
                  <div className="text-gray-400 text-sm">Current theme setting</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="text-blue-400 font-semibold">Refresh Rate</div>
                    <div className="text-white">{settings.display.refreshInterval}s</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="text-green-400 font-semibold">Animations</div>
                    <div className="text-white">{settings.display.showAnimations ? 'Enabled' : 'Disabled'}</div>
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}

        {activeTab === 'traffic' && (
          <>
            <Card title="🚦 Traffic Control Settings" className="h-fit">
              <div className="space-y-1">
                <SelectInput
                  value={settings.traffic.defaultView}
                  onChange={(val) => updateSetting('traffic', 'defaultView', val)}
                  label="Default View"
                  options={[
                    { value: 'dashboard', label: 'Dashboard Overview' },
                    { value: 'map', label: 'Live Traffic Map' },
                    { value: 'analytics', label: 'Analytics Hub' },
                  ]}
                />
                <NumberInput
                  value={settings.traffic.congestionThreshold}
                  onChange={(val) => updateSetting('traffic', 'congestionThreshold', val)}
                  label="Congestion Alert Threshold"
                  min={50}
                  max={100}
                  unit="%"
                />
                <ToggleSwitch
                  checked={settings.traffic.emergencyPriority}
                  onChange={(val) => updateSetting('traffic', 'emergencyPriority', val)}
                  label="Emergency Priority"
                  description="Automatically prioritize emergency vehicle routes"
                />
                <ToggleSwitch
                  checked={settings.traffic.autoSignalOptimization}
                  onChange={(val) => updateSetting('traffic', 'autoSignalOptimization', val)}
                  label="Auto Signal Optimization"
                  description="AI-powered traffic signal timing optimization"
                />
              </div>
            </Card>

            <Card title="📈 Traffic Analytics" className="h-fit">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-900/30 border border-red-500/50 p-4 rounded-lg text-center">
                    <div className="text-red-400 font-bold text-xl">85%</div>
                    <div className="text-gray-400 text-sm">Peak Congestion</div>
                  </div>
                  <div className="bg-green-900/30 border border-green-500/50 p-4 rounded-lg text-center">
                    <div className="text-green-400 font-bold text-xl">12</div>
                    <div className="text-gray-400 text-sm">Optimized Signals</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Average Speed:</span>
                    <span className="text-white">24.5 mph</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Emergency Responses:</span>
                    <span className="text-white">3 today</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Efficiency Improvement:</span>
                    <span className="text-green-400">+15%</span>
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}

        {activeTab === 'system' && (
          <>
            <Card title="⚙️ System Configuration" className="h-fit">
              <div className="space-y-1">
                <SelectInput
                  value={settings.system.language}
                  onChange={(val) => updateSetting('system', 'language', val)}
                  label="Language"
                  options={[
                    { value: 'en', label: 'English' },
                    { value: 'es', label: 'Español' },
                    { value: 'fr', label: 'Français' },
                    { value: 'de', label: 'Deutsch' },
                  ]}
                />
                <SelectInput
                  value={settings.system.timezone}
                  onChange={(val) => updateSetting('system', 'timezone', val)}
                  label="Timezone"
                  options={[
                    { value: 'UTC-8', label: 'Pacific Time (UTC-8)' },
                    { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
                    { value: 'UTC+0', label: 'UTC (UTC+0)' },
                    { value: 'UTC+1', label: 'Central European (UTC+1)' },
                  ]}
                />
                <NumberInput
                  value={settings.system.dataRetention}
                  onChange={(val) => updateSetting('system', 'dataRetention', val)}
                  label="Data Retention Period"
                  min={7}
                  max={365}
                  unit="days"
                />
                <SelectInput
                  value={settings.system.backupFrequency}
                  onChange={(val) => updateSetting('system', 'backupFrequency', val)}
                  label="Backup Frequency"
                  options={[
                    { value: 'hourly', label: 'Every Hour' },
                    { value: 'daily', label: 'Daily' },
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'monthly', label: 'Monthly' },
                  ]}
                />
              </div>
            </Card>

            <Card title="💾 System Status" className="h-fit">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Database Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">API Services</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 text-sm">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Backup Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-400 text-sm">In Progress</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                    💾 Export Settings
                  </button>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>

      {/* Save Button */}
      <div className="text-center">
        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
          onClick={() => alert('Settings saved successfully! 🎉')}
        >
          💾 Save All Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
