import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyWeatherReport = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = '85126e9b7d53d0560b8c5a8ad8f8a2b1';
    const location = 'New York';

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
                setWeather(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWeather();
    }, [location, apiKey]);

    if (error) return <div>Error: {error}</div>;
    if (!weather) return <div>Loading...</div>;

    return (
        <div className="weather-widget">
            <h3>Weather in {weather.name}</h3>
            <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
        </div>
    );
};

export default MyWeatherReport;
