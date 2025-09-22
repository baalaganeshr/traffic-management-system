import React from 'react';
import { useTrafficData } from '../hooks/useTrafficData';
import Analytics from '../components/Analytics';
import IncidentFeed from '../components/IncidentFeed';
import EnvironmentalStats from '../components/EnvironmentalStats';
import Card from '../components/common/Card';

type DashboardOverviewProps = ReturnType<typeof useTrafficData>;

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ incidents, historicalData, predictiveData, environmentalData }) => {
    
    const totalVehicles = historicalData.length > 0 ? historicalData[historicalData.length - 1].vehicleCount : 3450;
    const avgCongestion = historicalData.length > 0 ? (historicalData.reduce((acc, curr) => acc + curr.congestion, 0) / historicalData.length) : 0.45;

    return (
        <div className="space-y-6 animate-enter">
            {/* Top Row: Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                    <h4 className="text-slate-400 text-sm font-medium">System Status</h4>
                    <p className="text-2xl font-bold text-green-400 mt-1">All Systems Online</p>
                </Card>
                 <Card className="text-center">
                    <h4 className="text-slate-400 text-sm font-medium">Average Congestion</h4>
                    <p className="text-2xl font-bold text-orange-400 mt-1">{(avgCongestion * 100).toFixed(1)}%</p>
                </Card>
                <Card className="text-center">
                    <h4 className="text-slate-400 text-sm font-medium">Active Incidents</h4>
                    <p className="text-2xl font-bold text-red-400 mt-1">{incidents.length}</p>
                </Card>
                 <Card className="text-center">
                    <h4 className="text-slate-400 text-sm font-medium">Total Vehicles Tracked</h4>
                    <p className="text-2xl font-bold text-cyan-400 mt-1">{totalVehicles.toLocaleString()}</p>
                </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Analytics historicalData={historicalData} predictiveData={predictiveData} />
                </div>
                <div className="flex flex-col gap-6">
                    <IncidentFeed incidents={incidents} />
                    <EnvironmentalStats data={environmentalData} />
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
