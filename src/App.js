import { useState } from 'react';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';
import './App.css';

const getRandomLocation = () => {
	return Math.floor(Math.random() * 108) + 1;
};
function App() {
	const [
		queryTerm,
		setQueryTerm
	] = useState(getRandomLocation());

	return (
		<div className="App">
			<header className="App-header">
				<SearchBox handleSearch={setQueryTerm} />
				<LocationContainer queryTerm={queryTerm} />
			</header>
		</div>
	);
}

export default App;
