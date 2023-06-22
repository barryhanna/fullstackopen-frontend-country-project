import React from 'react';
import { API_KEY } from '../data/secrets.js';

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;

const Weather = ({ cityName, lat, lon }) => {
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

	return (
		<>
			<h3>Weather in {cityName}</h3>
			<pre>{JSON.stringify(weather, null, 2)}</pre>
		</>
	);
};

export default Weather;
