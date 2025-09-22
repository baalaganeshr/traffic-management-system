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
  if (congestion > 0.8) return 'bg-red-500';
  if (congestion > 0.6) return 'bg-orange-500';
  if (congestion > 0.4) return 'bg-yellow-500';
  return 'bg-green-500';
};

const TrafficMap: React.FC<TrafficMapProps> = ({ intersections, onSelectIntersection, selectedIntersectionId, className='' }) => {
  return (
    <Card title="Live Traffic Map" className={`flex-grow h-[400px] lg:h-auto ${className}`}>
      <div className="relative w-full h-full min-h-[350px] bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700">
        {/* Simple grid background using CSS */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Street lines using CSS */}
        <div className="absolute inset-0">
          {/* Horizontal streets */}
          <div className="absolute w-full h-1 bg-gray-600" style={{ top: '25%' }}></div>
          <div className="absolute w-full h-1 bg-gray-600" style={{ top: '50%' }}></div>
          <div className="absolute w-full h-1 bg-gray-600" style={{ top: '70%' }}></div>
          
          {/* Vertical streets */}
          <div className="absolute h-full w-1 bg-gray-600" style={{ left: '30%' }}></div>
          <div className="absolute h-full w-1 bg-gray-600" style={{ left: '55%' }}></div>
          <div className="absolute h-full w-1 bg-gray-600" style={{ left: '75%' }}></div>
        </div>
        
        {/* City label */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-green-400 px-3 py-2 rounded font-mono text-sm border border-green-500">
          🌆 Smart City Traffic Network
        </div>
        
        {/* Intersection markers */}
        {intersections.map((intersection) => (
          <div
            key={intersection.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
            style={{ top: intersection.position.top, left: intersection.position.left }}
            onClick={() => onSelectIntersection(intersection)}
          >
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white
              ${getCongestionColor(intersection.congestion)}
              ${selectedIntersectionId === intersection.id ? 'ring-4 ring-cyan-400 scale-125' : ''}
              ${intersection.isEmergency ? 'animate-pulse border-blue-400' : ''}
              hover:scale-110 hover:shadow-lg
            `}>
              {intersection.isEmergency && <span className="text-white font-bold text-xs">⚡</span>}
            </div>
            
            {/* Intersection name label */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold bg-black bg-opacity-75 px-2 py-1 rounded whitespace-nowrap">
              {intersection.name}
            </div>
            
            {/* Hover tooltip */}
            <div className="absolute bottom-full mb-12 left-1/2 -translate-x-1/2 w-max bg-black text-white text-xs rounded-lg py-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-600 z-20">
              <div className="font-bold text-cyan-400 mb-1">{intersection.name}</div>
              <div>🚦 Congestion: <span className="font-semibold text-yellow-400">{(intersection.congestion * 100).toFixed(0)}%</span></div>
              <div>🚗 Avg Speed: <span className="font-semibold text-green-400">{intersection.avgSpeed} mph</span></div>
              <div>🚛 Vehicles: <span className="font-semibold text-blue-400">{intersection.vehicleDistribution.reduce((sum, v) => sum + v.count, 0)}</span></div>
            </div>
          </div>
        ))}
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-90 text-white text-xs rounded-lg p-4 border border-gray-600">
          <div className="font-bold text-cyan-400 mb-3">🚦 Traffic Status</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500 border border-white"></div>
              <span>Low (0-40%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-yellow-500 border border-white"></div>
              <span>Medium (40-60%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-orange-500 border border-white"></div>
              <span>High (60-80%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500 border border-white"></div>
              <span>Critical (80%+)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 border border-white animate-pulse"></div>
              <span>Emergency ⚡</span>
            </div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          🟢 LIVE
        </div>
      </div>
    </Card>
  );
};

export default TrafficMap;