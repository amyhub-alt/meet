import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";



const EventGenresChart = ({events}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(getData());
    }, [events]);

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
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
                x={x}
                y={y}
                fill={colors[index % colors.length]}
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };



    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              fill="#8884d8"
              labelLine={false}
              label= {renderCustomizedLabel}
              outerRadius={110}           
            >
            {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      );
}



export default EventGenresChart;