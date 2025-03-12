import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";



const EventGenresChart = ({events}) => {
    const [data, setData] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(()=>{
        setData(getData());
    }, [events]);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);  
        };
    
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);




    const genres = ['React', 'Javascript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#AF9BB6', '#84596B', '#603A40', '#440D0F', '#304366'];

    const getData = () => {
        return genres.map((genre) => {
            const filteredEvents = events.filter((event) => 
                event.summary.toLowerCase().includes(genre.toLowerCase())  
            );
            return {
                name: genre,
                value: filteredEvents.length
            };
        });
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const isSmallScreen = window.innerWidth <= 1050;  
        const radius = isSmallScreen ? outerRadius * 0.6 : outerRadius * 1.4; 
    
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        return percent ? (
            <text
                x={x}
                y={y}
                fill={isSmallScreen ? "#FFFFFF" : colors[index % colors.length]}  
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14px"
                fontWeight="bold"
                
            >
                {isSmallScreen ? `${(percent * 100).toFixed(0)}%` : `${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };
    
    



    return (
        <ResponsiveContainer width="99%" height={400}>
         <PieChart>
            <Pie
               data={data}
               dataKey="value"
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={isSmallScreen ? 100 : 130}
            >
                {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
    </Pie>
    <Legend className="custom-legend" verticalAlign="bottom" align="center" />
</PieChart>
        </ResponsiveContainer>
      );
}



export default EventGenresChart;