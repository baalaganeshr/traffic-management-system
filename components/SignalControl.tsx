import React from 'react';
import { Intersection } from '../types';
import Card from './common/Card';

interface SignalControlProps {
  intersection: Intersection;
  onOpenTrafficLightModal: () => void;
}

const SignalControl: React.FC<SignalControlProps> = ({ intersection, onOpenTrafficLightModal }) => {
  return (
    <Card title="Autonomous Signal Control">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-md bg-navy-700/50">
          <span className="font-semibold text-cyan-400">Mode</span>
          <span className="px-3 py-1 text-sm font-medium text-green-200 bg-green-700/50 rounded-full">
            AI Adaptive
          </span>
        </div>
        
        {intersection.isEmergency && (
            <div className="p-3 rounded-md bg-blue-900/50 border border-blue-500 text-blue-200">
                <p className="font-bold">Emergency Vehicle Auto-Clearing Active</p>
                <p className="text-sm">Signal timings prioritized for emergency route.</p>
            </div>
        )}

        <div>
          <h4 className="font-semibold mb-2 text-gray-300">Current AI Timings</h4>
          <div className="space-y-2">
            {intersection.signalTimings.map(timing => (
              <div key={timing.lane} className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Lane {timing.lane} ({timing.vehicleCount} vehicles)</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-navy-700 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(timing.greenTime / 90) * 100}%` }}></div>
                  </div>
                  <span className="font-mono w-12 text-right">{timing.greenTime}s Green</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onOpenTrafficLightModal}
          className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-800 focus:ring-cyan-500"
        >
          View Live Signal
        </button>

        <button className="w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-800 focus:ring-orange-500">
          Manual Override
        </button>
      </div>
    </Card>
  );
};

export default SignalControl;