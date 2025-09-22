import React, { useState } from 'react';
import { Device, DeviceStatus } from '../types';
import Card from '../components/common/Card';

interface DeviceManagementProps {
  devices: Device[];
}

const getStatusColor = (status: DeviceStatus) => {
  switch (status) {
    case DeviceStatus.Online: return 'bg-green-500/20 text-green-400';
    case DeviceStatus.Offline: return 'bg-red-500/20 text-red-400';
    case DeviceStatus.Maintenance: return 'bg-yellow-500/20 text-yellow-400';
  }
};

const DeviceManagement: React.FC<DeviceManagementProps> = ({ devices }) => {
  const [filter, setFilter] = useState<'all' | DeviceStatus>('all');

  const filteredDevices = devices.filter(device => filter === 'all' || device.status === filter);

  return (
    <div className="animate-enter">
      <Card title="IoT Device Management">
        <div className="mb-4 flex items-center gap-2">
            <span className="text-sm font-medium">Filter by status:</span>
            <button onClick={() => setFilter('all')} className={`px-3 py-1 text-sm rounded-full ${filter === 'all' ? 'bg-cyan-500 text-white' : 'bg-navy-700'}`}>All</button>
            <button onClick={() => setFilter(DeviceStatus.Online)} className={`px-3 py-1 text-sm rounded-full ${filter === DeviceStatus.Online ? 'bg-cyan-500 text-white' : 'bg-navy-700'}`}>Online</button>
            <button onClick={() => setFilter(DeviceStatus.Offline)} className={`px-3 py-1 text-sm rounded-full ${filter === DeviceStatus.Offline ? 'bg-cyan-500 text-white' : 'bg-navy-700'}`}>Offline</button>
            <button onClick={() => setFilter(DeviceStatus.Maintenance)} className={`px-3 py-1 text-sm rounded-full ${filter === DeviceStatus.Maintenance ? 'bg-cyan-500 text-white' : 'bg-navy-700'}`}>Maintenance</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-white uppercase bg-navy-700/50">
              <tr>
                <th scope="col" className="px-6 py-3">Device ID</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Location</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Last Check-in</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map(device => (
                <tr key={device.id} className="bg-navy-800/80 border-b border-navy-700 hover:bg-navy-700/50">
                  <th scope="row" className="px-6 py-4 font-mono font-medium text-white whitespace-nowrap">{device.id}</th>
                  <td className="px-6 py-4">{device.type}</td>
                  <td className="px-6 py-4">{device.location}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(device.status)}`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{device.lastCheckIn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DeviceManagement;
