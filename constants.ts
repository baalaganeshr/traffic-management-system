import { Role, User, Intersection, VehicleType, Device, DeviceStatus } from './types';

export const USERS: Record<string, User> = {
  'dktr610@gmail.com': { email: 'dktr610@gmail.com', role: Role.Admin },
  'operator@traffic.com': { email: 'operator@traffic.com', role: Role.Operator },
};

export const INITIAL_INTERSECTIONS: Intersection[] = [
  {
    id: 'int-01',
    name: 'Oak & Main',
    position: { top: '25%', left: '30%' },
    congestion: 0.75,
    avgSpeed: 15,
    vehicleDistribution: [
      { type: VehicleType.Car, count: 180 },
      { type: VehicleType.Bus, count: 12 },
      { type: VehicleType.Bike, count: 60 },
      { type: VehicleType.Truck, count: 25 },
    ],
    signalTimings: [
      { lane: 'N/S', greenTime: 40, vehicleCount: 155 },
      { lane: 'E/W', greenTime: 20, vehicleCount: 82 },
    ],
    isEmergency: false,
  },
  {
    id: 'int-02',
    name: 'Pine & 1st Ave',
    position: { top: '50%', left: '55%' },
    congestion: 0.3,
    avgSpeed: 45,
    vehicleDistribution: [
      { type: VehicleType.Car, count: 50 },
      { type: VehicleType.Bus, count: 5 },
      { type: VehicleType.Bike, count: 20 },
      { type: VehicleType.Truck, count: 10 },
    ],
    signalTimings: [
        { lane: 'N/S', greenTime: 30, vehicleCount: 45 },
        { lane: 'E/W', greenTime: 30, vehicleCount: 55 },
    ],
    isEmergency: false,
  },
  {
    id: 'int-03',
    name: 'Maple & Highway 5',
    position: { top: '70%', left: '20%' },
    congestion: 0.9,
    avgSpeed: 8,
    vehicleDistribution: [
      { type: VehicleType.Car, count: 250 },
      { type: VehicleType.Bus, count: 20 },
      { type: VehicleType.Bike, count: 30 },
      { type: VehicleType.Truck, count: 40 },
    ],
    signalTimings: [
        { lane: 'N/S', greenTime: 50, vehicleCount: 230 },
        { lane: 'E/W', greenTime: 15, vehicleCount: 70 },
    ],
    isEmergency: false,
  },
   {
    id: 'int-04',
    name: 'Elm & Central',
    position: { top: '35%', left: '75%' },
    congestion: 0.5,
    avgSpeed: 30,
    vehicleDistribution: [
      { type: VehicleType.Car, count: 120 },
      { type: VehicleType.Bus, count: 15 },
      { type: VehicleType.Bike, count: 45 },
      { type: VehicleType.Truck, count: 18 },
    ],
    signalTimings: [
        { lane: 'N/S', greenTime: 35, vehicleCount: 95 },
        { lane: 'E/W', greenTime: 25, vehicleCount: 68 },
    ],
    isEmergency: true,
  },
];

export const DEVICES: Device[] = [
    { id: 'CAM-01A', type: 'Camera', location: 'Oak & Main', status: DeviceStatus.Online, lastCheckIn: '0m ago' },
    { id: 'CAM-01B', type: 'Camera', location: 'Oak & Main', status: DeviceStatus.Online, lastCheckIn: '0m ago' },
    { id: 'SEN-01', type: 'Sensor', location: 'Oak & Main', status: DeviceStatus.Online, lastCheckIn: '0m ago' },
    { id: 'CAM-02A', type: 'Camera', location: 'Pine & 1st Ave', status: DeviceStatus.Online, lastCheckIn: '1m ago' },
    { id: 'SEN-02', type: 'Sensor', location: 'Pine & 1st Ave', status: DeviceStatus.Offline, lastCheckIn: '45m ago' },
    { id: 'CAM-03A', type: 'Camera', location: 'Maple & Highway 5', status: DeviceStatus.Online, lastCheckIn: '0m ago' },
    { id: 'SEN-03', type: 'Sensor', location: 'Maple & Highway 5', status: DeviceStatus.Maintenance, lastCheckIn: '3h ago' },
    { id: 'CAM-04A', type: 'Camera', location: 'Elm & Central', status: DeviceStatus.Online, lastCheckIn: '2m ago' },
];