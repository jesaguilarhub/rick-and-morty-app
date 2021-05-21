import { useState, useEffect } from 'react';
import getLocationById from '../services/getLocationById';
import getLocationByName from '../services/getLocationByName';
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';
import '../LocationContainer.css';
const LocationContainer = ({ queryTerm }) => {
	const [
		population,
		setPopulation
	] = useState(0);
	const [
		residents,
		setResidents
	] = useState([]);
	const [
		locationName,
		setLocationName
	] = useState('');
	const [
		locationType,
		setLocationType
	] = useState('');
	const [
		locationDimension,
		setLocationDimension
	] = useState('');

	useEffect(
		() => {
			if (queryTerm) {
				const isNameLocation = new RegExp('[a-z]');
				if (isNameLocation.test(queryTerm)) {
					getLocationByName(queryTerm)
						.then(({ results }) => {
							setLocationName(results[0].name);
							setLocationType(results[0].type);
							setLocationDimension(results[0].dimension);
							setPopulation(results[0].residents.length);
							setResidents(
								results[0].residents.slice(0, 9).map((residentUrl, idx) => {
									return <ResidentContainer key={idx} url={residentUrl} />;
								})
							);
						})
						.catch((err) => alert('Enter a valid name' + err));
				}
				else {
					getLocationById(queryTerm)
						.then((location) => {
							setLocationName(location.name);
							setLocationType(location.type);
							setLocationDimension(location.dimension);
							setPopulation(location.residents.length);
							setResidents(
								location.residents.slice(0, 9).map((residentUrl, idx) => {
									return <ResidentContainer key={idx} url={residentUrl} />;
								})
							);
						})
						.catch((err) => alert(err));
				}
			}
		},
		[
			queryTerm
		]
	);

	return (
		<div className="location-container">
			{locationName ? (
				<LocationInfo
					name={locationName}
					type={locationType}
					dimension={locationDimension}
					residents={residents}
					population={population}
				/>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export default LocationContainer;
