import React from 'react';
import { API_KEY } from '../data/secrets.js';

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid=${API_KEY}`;

const Weather = ({ city, lat, lon }) => {
	const [weather, setWeather] = React.useState({});

	React.useEffect(() => {
		const url = WEATHER_API_URL.replace('{lat}', lat).replace(
			'{lon}',
			lon
		);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setWeather(data);
			});
	}, [lat, lon]);

	console.log(weather);

	return (
		<>
			<h3>Weather in {city}</h3>
			<p>Temp: {weather?.main?.temp}&deg;C</p>
			<img
				src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
				alt=""
			/>
			<p>Wind: {weather?.wind?.speed} m/s</p>
		</>
	);
};

export default Weather;
