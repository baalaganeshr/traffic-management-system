import React, { useState, useEffect } from 'react';
import { Intersection } from '../types';
import Card from './common/Card';

interface TrafficLightModalProps {
  intersection: Intersection;
  onClose: () => void;
}

const Light = ({ color, active }: { color: string, active: boolean }) => (
  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-navy-700 transition-all duration-300 ${
    active ? `${color} shadow-lg shadow-current` : 'bg-navy-800 opacity-50'
  }`} />
);

const TrafficLight = ({ state }: { state: 'red' | 'yellow' | 'green' }) => (
  <div className="bg-black/50 p-2 rounded-lg flex flex-col gap-2 border border-navy-700">
    <Light color="bg-red-500" active={state === 'red'} />
    <Light color="bg-yellow-500" active={state === 'yellow'} />
    <Light color="bg-green-500" active={state === 'green'} />
  </div>
);


const TrafficLightModal: React.FC<TrafficLightModalProps> = ({ intersection, onClose }) => {
    const [activeLaneIndex, setActiveLaneIndex] = useState(0);
    const [lightState, setLightState] = useState<'green' | 'yellow'>('green');

    const timerDuration = lightState === 'green' 
        ? intersection.signalTimings[activeLaneIndex].greenTime * 1000 
        : 3000; // 3 seconds for yellow light

    useEffect(() => {
        const timer = setTimeout(() => {
            if (lightState === 'green') {
                setLightState('yellow');
            } else { // current state is 'yellow'
                setLightState('green');
                setActiveLaneIndex(prevIndex => (prevIndex + 1) % intersection.signalTimings.length);
            }
        }, timerDuration);

        return () => clearTimeout(timer);
    }, [lightState, activeLaneIndex, timerDuration, intersection.signalTimings.length]);

    return (
        <div 
            className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center z-50 animate-enter"
            onClick={onClose}
        >
            <div className="w-full max-w-lg" onClick={e => e.stopPropagation()}>
                <Card title={`Live Signal: ${intersection.name}`}>
                    <div className="flex justify-around items-start p-4">
                        {intersection.signalTimings.map((timing, index) => {
                            let state: 'red' | 'yellow' | 'green' = 'red';
                            if (index === activeLaneIndex) {
                                state = lightState;
                            }
                            return (
                                <div key={timing.lane} className="flex flex-col items-center gap-4">
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-white">Lane {timing.lane}</h4>
                                        <p className="text-slate-400">{timing.vehicleCount} vehicles waiting</p>
                                    </div>
                                    <TrafficLight state={state} />
                                    <div className="text-center font-mono">
                                        {state === 'green' && <p className="text-green-400 text-lg">{timing.greenTime}s</p>}
                                        {state === 'yellow' && <p className="text-yellow-400 text-lg">3s</p>}
                                        {state === 'red' && <p className="text-red-400 text-lg">STOP</p>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                     <button
                        onClick={onClose}
                        className="mt-4 w-full py-2 px-4 bg-navy-700 hover:bg-navy-600 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-800 focus:ring-gray-500"
                    >
                        Close
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default TrafficLightModal;