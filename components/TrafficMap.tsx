import React from 'react';
import { Intersection } from '../types';
import Card from './common/Card';

interface TrafficMapProps {
  intersections: Intersection[];
  onSelectIntersection: (intersection: Intersection) => void;
  selectedIntersectionId: string | null;
  className?: string;
}

const getCongestionColor = (congestion: number): string => {
  if (congestion > 0.8) return 'bg-red-500 shadow-red-500/50';
  if (congestion > 0.6) return 'bg-orange-500 shadow-orange-500/50';
  if (congestion > 0.4) return 'bg-yellow-500 shadow-yellow-500/50';
  return 'bg-green-500 shadow-green-500/50';
};

const TrafficMap: React.FC<TrafficMapProps> = ({ intersections, onSelectIntersection, selectedIntersectionId, className='' }) => {
  return (
    <Card title="Live Traffic Map" className={`flex-grow h-[400px] lg:h-auto ${className}`}>
      <div className="relative w-full h-full min-h-[300px] bg-slate-800 rounded-md overflow-hidden border border-slate-700">
        {/* Background map pattern */}
        <div className="absolute inset-0 w-full h-full opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Street lines */}
            <line x1="0%" y1="25%" x2="100%" y2="25%" stroke="#4B5563" strokeWidth="2"/>
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#4B5563" strokeWidth="2"/>
            <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="#4B5563" strokeWidth="2"/>
            <line x1="30%" y1="0%" x2="30%" y2="100%" stroke="#4B5563" strokeWidth="2"/>
            <line x1="55%" y1="0%" x2="55%" y2="100%" stroke="#4B5563" strokeWidth="2"/>
            <line x1="75%" y1="0%" x2="75%" y2="100%" stroke="#4B5563" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* City label */}
        <div className="absolute top-4 left-4 bg-slate-900/80 text-slate-300 px-3 py-1 rounded text-sm">
          Smart City Traffic Network
        </div>
        
        {/* Intersection markers */}
        {intersections.map((intersection) => (
          <div
            key={intersection.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: intersection.position.top, left: intersection.position.left }}
            onClick={() => onSelectIntersection(intersection)}
          >
            <div className={`
              w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg
              ${getCongestionColor(intersection.congestion)}
              ${selectedIntersectionId === intersection.id ? 'ring-4 ring-offset-2 ring-offset-slate-800 ring-cyan-400 scale-110' : 'ring-2 ring-slate-900/50'}
              ${intersection.isEmergency ? 'animate-pulse !bg-blue-500' : ''}
              hover:scale-125 hover:shadow-xl
            `}>
              {intersection.isEmergency && <span className="text-white font-bold text-xs">E</span>}
            </div>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
              <div className="font-semibold">{intersection.name}</div>
              <div>Congestion: {(intersection.congestion * 100).toFixed(0)}%</div>
              <div>Avg Speed: {intersection.avgSpeed} mph</div>
            </div>
          </div>
        ))}
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-slate-900/90 text-white text-xs rounded p-3 space-y-2">
          <div className="font-semibold mb-2">Traffic Congestion</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Low (0-40%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Medium (40-60%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>High (60-80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Severe (80%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Emergency</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrafficMap;