import React, { useState } from 'react';
import { Intersection } from '../types';
import TrafficMap from '../components/TrafficMap';
import IntersectionDetails from '../components/IntersectionDetails';
import SignalControl from '../components/SignalControl';
import IncidentFeed from '../components/IncidentFeed';
import { useTrafficData } from '../hooks/useTrafficData';
import TrafficLightModal from '../components/TrafficLightModal';

type LiveMapPageProps = ReturnType<typeof useTrafficData>;

const LiveMapPage: React.FC<LiveMapPageProps> = ({ intersections, incidents }) => {
  const [selectedIntersection, setSelectedIntersection] = useState<Intersection | null>(null);
  const [isTrafficLightModalOpen, setTrafficLightModalOpen] = useState(false);

  const handleSelectIntersection = (intersection: Intersection) => {
    setSelectedIntersection(intersection);
  };

  return (
    <div className="h-full flex flex-col gap-6 animate-enter">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content: Map and Details */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <TrafficMap
            intersections={intersections}
            onSelectIntersection={handleSelectIntersection}
            selectedIntersectionId={selectedIntersection?.id || null}
            className="flex-grow"
          />
          {selectedIntersection && <IntersectionDetails intersection={selectedIntersection} />}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {selectedIntersection ? (
            <SignalControl
              intersection={selectedIntersection}
              onOpenTrafficLightModal={() => setTrafficLightModalOpen(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-48 bg-navy-800/70 border border-navy-700 rounded-xl text-slate-400">
              <p>Select an intersection to view controls.</p>
            </div>
          )}
          <IncidentFeed incidents={incidents} />
        </div>
      </div>
       {isTrafficLightModalOpen && selectedIntersection && (
        <TrafficLightModal 
            intersection={selectedIntersection} 
            onClose={() => setTrafficLightModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default LiveMapPage;
