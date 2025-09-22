import { useState, useEffect, useCallback } from 'react';
import { Intersection, Incident, HistoricalDataPoint, PredictiveDataPoint, EnvironmentalData } from '../types';
import { INITIAL_INTERSECTIONS } from '../constants';

const generateRandomNumber = (min: number, max: number) => Math.random() * (max - min) + min;

export const useTrafficData = () => {
  const [intersections, setIntersections] = useState<Intersection[]>(INITIAL_INTERSECTIONS);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [historicalData, setHistoricalData] = useState<HistoricalDataPoint[]>([]);
  const [predictiveData, setPredictiveData] = useState<PredictiveDataPoint[]>([]);
  const [environmentalData, setEnvironmentalData] = useState<EnvironmentalData>({ co2SavedKg: 320, no2ReductionPercent: 15 });

  const updateTrafficData = useCallback(() => {
    setIntersections(prevIntersections =>
      prevIntersections.map(intersection => {
        if (intersection.isEmergency) return intersection;

        const congestionChange = generateRandomNumber(-0.05, 0.05);
        const newCongestion = Math.max(0.1, Math.min(1, intersection.congestion + congestionChange));

        const newSignalTimings = intersection.signalTimings.map(st => {
            const vehicleChange = generateRandomNumber(-10, 10);
            const newVehicleCount = Math.max(5, Math.round(st.vehicleCount + vehicleChange));
            
            // AI Logic: Green time is a base time + a factor of vehicle count
            const newGreenTime = Math.min(90, Math.round(15 + (newVehicleCount * 0.15)));

            return {
                ...st,
                vehicleCount: newVehicleCount,
                greenTime: newGreenTime,
            };
        });

        return {
          ...intersection,
          congestion: newCongestion,
          avgSpeed: Math.round(50 * (1 - newCongestion) + 5),
          vehicleDistribution: intersection.vehicleDistribution.map(vd => ({
            ...vd,
            count: Math.max(10, Math.round(vd.count + generateRandomNumber(-5, 5))),
          })),
          signalTimings: newSignalTimings,
        };
      })
    );

    // Occasionally generate a new incident
    if (Math.random() < 0.1) {
        const randomIntersection = intersections[Math.floor(Math.random() * intersections.length)];
        const newIncident: Incident = {
            id: `inc-${Date.now()}`,
            timestamp: new Date(),
            intersectionId: randomIntersection.id,
            intersectionName: randomIntersection.name,
            description: 'AI Detection: Sudden Stop & Congestion',
            severity: Math.random() < 0.3 ? 'high' : 'medium',
        };
        setIncidents(prev => [newIncident, ...prev].slice(0, 10)); // Keep last 10 incidents
    }

    setEnvironmentalData(prev => ({
        ...prev,
        co2SavedKg: prev.co2SavedKg + generateRandomNumber(0.1, 0.5)
    }));

  }, [intersections]);
  
  const initializeAnalytics = useCallback(() => {
     // Generate dummy historical data
    const newHistoricalData: HistoricalDataPoint[] = Array.from({ length: 12 }, (_, i) => {
        const hour = i * 2;
        return {
            time: `${hour}:00`,
            congestion: Math.random() * 0.6 + 0.2,
            vehicleCount: Math.floor(Math.random() * 1500 + 500)
        }
    });
    setHistoricalData(newHistoricalData);

    // Generate dummy predictive data
    const newPredictiveData: PredictiveDataPoint[] = Array.from({ length: 6 }, (_, i) => {
        const hour = new Date().getHours() + i + 1;
        return {
            time: `${hour % 24}:00`,
            predictedCongestion: Math.random() * 0.7 + 0.25
        }
    });
    setPredictiveData(newPredictiveData);
  }, []);

  useEffect(() => {
    initializeAnalytics();
    const interval = setInterval(updateTrafficData, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { intersections, incidents, historicalData, predictiveData, environmentalData };
};