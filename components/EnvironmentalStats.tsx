
import React from 'react';
import { EnvironmentalData } from '../types';
import Card from './common/Card';

interface EnvironmentalStatsProps {
  data: EnvironmentalData;
}

const EnvironmentalStats: React.FC<EnvironmentalStatsProps> = ({ data }) => {
  return (
    <Card title="Sustainability Dashboard">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">CO₂ Saved (Today)</span>
          <span className="font-bold text-lg text-green-400">{data.co2SavedKg.toFixed(1)} kg</span>
        </div>
        <div className="w-full bg-navy-700 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400">NO₂ Reduction</span>
          <span className="font-bold text-lg text-green-400">{data.no2ReductionPercent}%</span>
        </div>
        <div className="w-full bg-navy-700 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${data.no2ReductionPercent}%` }}></div>
        </div>
      </div>
    </Card>
  );
};

export default EnvironmentalStats;