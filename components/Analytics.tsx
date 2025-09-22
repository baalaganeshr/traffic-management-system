
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { HistoricalDataPoint, PredictiveDataPoint } from '../types';
import Card from './common/Card';

interface AnalyticsProps {
    historicalData: HistoricalDataPoint[];
    predictiveData: PredictiveDataPoint[];
}

const Analytics: React.FC<AnalyticsProps> = ({ historicalData, predictiveData }) => {
    return (
        <Card title="Advanced Analytics & Predictive Insights">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[250px]">
                <div>
                    <h4 className="text-md font-semibold text-white mb-2">Historical Congestion (Today)</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={historicalData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                            <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 1]} tickFormatter={(tick) => `${(tick * 100).toFixed(0)}%`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                                labelStyle={{ color: '#d1d5db' }}
                                formatter={(value: number) => [`${(value * 100).toFixed(0)}%`, "Congestion"]}
                            />
                            <Legend wrapperStyle={{ color: '#94a3b8' }} />
                            <Line type="monotone" dataKey="congestion" name="Avg. Congestion" stroke="#f59e0b" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                 <div>
                    <h4 className="text-md font-semibold text-white mb-2">Predictive Congestion (Next 6 Hours)</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={predictiveData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                            <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 1]} tickFormatter={(tick) => `${(tick * 100).toFixed(0)}%`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                                labelStyle={{ color: '#d1d5db' }}
                                formatter={(value: number) => [`${(value * 100).toFixed(0)}%`, "Predicted"]}
                            />
                            <Legend wrapperStyle={{ color: '#94a3b8' }} />
                            <Bar dataKey="predictedCongestion" name="Forecast" fill="#ef4444" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Card>
    );
};

export default Analytics;