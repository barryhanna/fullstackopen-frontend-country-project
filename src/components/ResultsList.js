import { useEffect, useState } from 'react';

const ResultsList = ({ results }) => {
	const [singleCountryData, setSingleCountryData] = useState('');

	useEffect(() => {
		if (results.length === 1) {
			fetch(
				`https://studies.cs.helsinki.fi/restcountries/api/name/${results[0]}`
			)
				.then((res) => res.json())
				.then((data) => setSingleCountryData(data));
		}
	}, [results]);

	if (results.length === 0) return <p>enter a country</p>;

	return (
		<>
			{singleCountryData && (
				<div>
					<h2>{singleCountryData.name.common}</h2>
					<p>Capital: {singleCountryData.capital[0]}</p>
					<p>Area: {singleCountryData.area}</p>
					<p>Languages:</p>
					<ul>
						{Object.values(singleCountryData.languages).map(
							(language) => (
								<li key={language}>{language}</li>
							)
						)}
					</ul>
					<img
						src={Object.values(singleCountryData.flags)[0]}
						alt={`${singleCountryData.name.common} Flag`}
					/>
				</div>
			)}
			{results.length > 1 && results.length < 11 && (
				<ul style={{ listStyle: 'none' }}>
					{results.map((country) => (
						<li key={country}>{country}</li>
					))}
				</ul>
			)}
			{results.length > 11 && <p>Too many results</p>}
		</>
	);
};

export default ResultsList;
