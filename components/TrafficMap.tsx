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
  if (congestion > 0.8) return 'bg-red-500 animate-pulse-fast';
  if (congestion > 0.6) return 'bg-orange-500';
  if (congestion > 0.4) return 'bg-yellow-500';
  return 'bg-green-500';
};

const TrafficMap: React.FC<TrafficMapProps> = ({ intersections, onSelectIntersection, selectedIntersectionId, className='' }) => {
  return (
    <Card title="Live Traffic Map" className={`flex-grow h-[400px] lg:h-auto ${className}`}>
      <div className="relative w-full h-full bg-navy-700/50 rounded-md overflow-hidden border border-navy-700/50">
        <img src="https://images.unsplash.com/photo-1534349569038-a8d0b86a79ce?q=80&w=1200&auto=format&fit=crop" alt="City Map" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        {intersections.map((intersection) => (
          <div
            key={intersection.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: intersection.position.top, left: intersection.position.left }}
            onClick={() => onSelectIntersection(intersection)}
          >
            <div className={`
              w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
              ${getCongestionColor(intersection.congestion)}
              ${selectedIntersectionId === intersection.id ? 'ring-4 ring-offset-2 ring-offset-navy-800 ring-cyan-400' : 'ring-2 ring-navy-900/50'}
              ${intersection.isEmergency ? 'animate-ping-slow !bg-blue-500' : ''}
            `}>
              {intersection.isEmergency && <span className="text-white font-bold text-xs">E</span>}
            </div>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-navy-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {intersection.name} <br /> Congestion: {(intersection.congestion * 100).toFixed(0)}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TrafficMap;