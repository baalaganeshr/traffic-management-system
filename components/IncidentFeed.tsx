
import React from 'react';
import { Incident } from '../types';
import Card from './common/Card';
import { AlertIcon } from './common/Icons';

interface IncidentFeedProps {
  incidents: Incident[];
}

const getSeverityColor = (severity: 'low' | 'medium' | 'high') => {
  switch (severity) {
    case 'high': return 'border-red-500 text-red-400';
    case 'medium': return 'border-orange-500 text-orange-400';
    case 'low': return 'border-yellow-500 text-yellow-400';
  }
};

const IncidentFeed: React.FC<IncidentFeedProps> = ({ incidents }) => {
  return (
    <Card title="Incident & Emergency Feed" className="flex-grow">
        <div className="space-y-3 h-64 overflow-y-auto pr-2">
        {incidents.length > 0 ? incidents.map(incident => (
            <div key={incident.id} className={`flex items-start gap-3 p-2 rounded-md bg-navy-900/50 border-l-4 ${getSeverityColor(incident.severity)}`}>
                <AlertIcon className={`h-5 w-5 mt-1 flex-shrink-0 ${getSeverityColor(incident.severity)}`} />
                <div>
                    <p className="font-semibold text-sm text-white">{incident.description}</p>
                    <p className="text-xs text-slate-400">{incident.intersectionName} - {incident.timestamp.toLocaleTimeString()}</p>
                </div>
            </div>
        )) : (
            <div className="flex items-center justify-center h-full text-gray-500">
                <p>No incidents detected.</p>
            </div>
        )}
        </div>
    </Card>
  );
};

export default IncidentFeed;