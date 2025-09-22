
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Intersection, VehicleType } from '../types';
import { CarIcon, BusIcon, BikeIcon, TruckIcon } from './common/Icons';
import Card from './common/Card';

interface IntersectionDetailsProps {
  intersection: Intersection;
}

const VehicleIcon: React.FC<{type: VehicleType, className?: string}> = ({ type, className }) => {
    switch(type) {
        case VehicleType.Car: return <CarIcon className={className} />;
        case VehicleType.Bus: return <BusIcon className={className} />;
        case VehicleType.Bike: return <BikeIcon className={className} />;
        case VehicleType.Truck: return <TruckIcon className={className} />;
        default: return null;
    }
}

const IntersectionDetails: React.FC<IntersectionDetailsProps> = ({ intersection }) => {
  const chartData = intersection.vehicleDistribution.map(vd => ({ name: vd.type, count: vd.count }));

  return (
    <Card title={`Details: ${intersection.name}`} className="min-h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Data & Feed */}
        <div className="md:col-span-1 space-y-4">
            <div className="flex justify-between items-center bg-navy-700 p-3 rounded-md">
                <span className="font-medium text-slate-400">Congestion</span>
                <span className={`font-bold text-lg ${intersection.congestion > 0.7 ? 'text-red-400' : 'text-green-400'}`}>
                    {(intersection.congestion * 100).toFixed(0)}%
                </span>
            </div>
            <div className="flex justify-between items-center bg-navy-700 p-3 rounded-md">
                <span className="font-medium text-slate-400">Avg. Speed</span>
                <span className="font-bold text-lg text-cyan-400">{intersection.avgSpeed} km/h</span>
            </div>
            <div className="bg-black rounded-md aspect-video flex items-center justify-center border border-navy-700">
                <p className="text-gray-500">Live Video Feed</p>
            </div>
        </div>

        {/* Vehicle Distribution Chart */}
        <div className="md:col-span-2 h-64">
          <h4 className="text-md font-semibold text-gray-300 mb-2">Live Vehicle Distribution</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3b8" fontSize={12} />
              <YAxis stroke="#9ca3b8" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                labelStyle={{ color: '#d1d5db' }}
              />
              <Bar dataKey="count" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default IntersectionDetails;