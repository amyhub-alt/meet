import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";



const EventGenresChart = ({events}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(getData());
    }, [events]);

    const genres = ['React', 'Javascript', 'Node', 'jQuery', 'Angular'];

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
    
    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              fill="#8884d8"
              labelLine={false}
              label
              outerRadius={130}           
            />
          </PieChart>
        </ResponsiveContainer>
      );
}



export default EventGenresChart;