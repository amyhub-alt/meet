import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis, YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
    const [data, setData] = useState([]);

    useEffect(()=> {
      // console.log("All locations BEFORE getData():", allLocations);  // Logs all cities before processing
      // console.log("Events BEFORE getData():", events);  // Logs all events received from API
        setData(getData());
    }, [events]);


    const getData= () =>{
        const data = allLocations.map((location) => {
        const count = events.filter((event) => event.location === location).length
          const city = location.split((/, | - /))[0]
            // console.log(`Processing location: ${location}, Event Count: ${count}`);  //  Logs each city after filtering
            return { count, city };
        })
        return data;
    };
    return (
        <ResponsiveContainer width="99%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 60,
              left: -30,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" nameç="City" angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14 }}/>
            <YAxis type="number" dataKey="count" name="Number of Events"/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data} fill="#AF9BB6" />
          </ScatterChart>
        </ResponsiveContainer>
      );
}

export default CityEventsChart;
