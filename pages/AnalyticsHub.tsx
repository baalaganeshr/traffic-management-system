import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { useTrafficData } from '../hooks/useTrafficData';
import Analytics from '../components/Analytics';
import Card from '../components/common/Card';
import { VehicleType } from '../types';

type AnalyticsHubProps = ReturnType<typeof useTrafficData>;

const AnalyticsHub: React.FC<AnalyticsHubProps> = ({ historicalData, predictiveData, intersections }) => {
  
  const totalVehicleDistribution = intersections
    .flatMap(i => i.vehicleDistribution)
    .reduce((acc, curr) => {
      const existing = acc.find(item => item.type === curr.type);
      if (existing) {
        existing.count += curr.count;
      } else {
        acc.push({ type: curr.type, count: curr.count });
      }
      return acc;
    }, [] as { type: VehicleType; count: number }[]);

  return (
    <div className="space-y-6 animate-enter">
      <Analytics historicalData={historicalData} predictiveData={predictiveData} />
      
      <Card title="City-Wide Vehicle Distribution">
         <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={totalVehicleDistribution} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="type" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                        labelStyle={{ color: '#d1d5db' }}
                    />
                    <Legend wrapperStyle={{ color: '#94a3b8' }}/>
                    <Bar dataKey="count" name="Total Vehicles" fill="#d946ef" />
                </BarChart>
            </ResponsiveContainer>
         </div>
      </Card>
    </div>
  );
};

export default AnalyticsHub;
