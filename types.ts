export enum Role {
  Admin = 'Admin',
  Operator = 'Operator',
  CityPlanner = 'City Planner',
  Analyst = 'Analyst',
}

export interface User {
  email: string;
  role: Role;
}

export enum VehicleType {
    Car = 'Car',
    Bus = 'Bus',
    Bike = 'Bike',
    Truck = 'Truck',
}

export interface VehicleData {
    type: VehicleType;
    count: number;
}

export interface SignalTiming {
    lane: string;
    greenTime: number; // in seconds
    vehicleCount: number; // number of vehicles waiting
}

export interface Intersection {
  id: string;
  name: string;
  position: { top: string; left: string };
  congestion: number; // 0 to 1
  avgSpeed: number; // km/h
  vehicleDistribution: VehicleData[];
  signalTimings: SignalTiming[];
  isEmergency: boolean;
}

export interface Incident {
    id: string;
    timestamp: Date;
    intersectionId: string;
    intersectionName: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
}

export interface HistoricalDataPoint {
    time: string;
    congestion: number;
    vehicleCount: number;
}

export interface PredictiveDataPoint {
    time: string;
    predictedCongestion: number;
}

export interface EnvironmentalData {
    co2SavedKg: number;
    no2ReductionPercent: number;
}

export enum DeviceStatus {
    Online = 'Online',
    Offline = 'Offline',
    Maintenance = 'Maintenance',
}

export interface Device {
    id: string;
    type: 'Camera' | 'Sensor';
    location: string; // Intersection name
    status: DeviceStatus;
    lastCheckIn: string;
}

export type Page = 'overview' | 'map' | 'analytics' | 'devices' | 'settings';