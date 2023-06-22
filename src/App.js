import React from 'react';
import ResultsList from './components/ResultsList';

const COUNTRY_URL =
	'https://studies.cs.helsinki.fi/restcountries/api/all';

function App() {
	const [searchTerm, setSearchTerm] = React.useState('');
	const [results, setResults] = React.useState([]);

	React.useEffect(() => {
		fetch(`${COUNTRY_URL}`)
			.then((res) => res.json())
			.then((json) =>
				setResults(json.map((country) => country.name.common))
			)
			.then((err) => console.error(err));
	}, []);

	const filtered = results.filter((country) =>
		country.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<p>
				find countries{' '}
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</p>
			<ResultsList results={filtered} />
		</div>
	);
}

export default App;
