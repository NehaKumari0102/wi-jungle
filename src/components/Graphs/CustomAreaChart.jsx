import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomAreaChart = ({ data }) => {
    const [chartData, setChartData] = useState([]);
    const is500px = useMediaQuery("(min-width: 500px)")

    useEffect(() => {
        processChartData();
    }, []);

    const processChartData = () => {
        // Assuming data is an array of event objects
        const eventTypeCounts = {};

        data.forEach((item) => {
            const { event_type } = item;
            eventTypeCounts[event_type] = eventTypeCounts[event_type] ? eventTypeCounts[event_type] + 1 : 1;
        })

        const formattedData = Object.keys(eventTypeCounts).map((eventType) => ({
            eventType: eventType,
            count: eventTypeCounts[eventType],
        }));

        setChartData(formattedData);
    };

    return (
        <div className="bg-[#1a1a1f] rounded-lg p-4">
            <h1 className="text-center text-lg font-semibold my-2">Event count</h1>
            <ResponsiveContainer width="100%" height={is500px ? 350 : 250}>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="eventType" />
                    <YAxis />
                    <Tooltip
                        labelStyle={{ color: '#333' }}
                        itemStyle={{ color: '#333' }}
                        wrapperStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="count" name='Event Count' stroke="#fff" fill="#2563eb" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomAreaChart;
