const baseUrl = 'https://rickandmortyapi.com/api/location/';

const getLocationById = (locationId) => {
	const promise = fetch(baseUrl + locationId);
	return promise.then((res) => res.json());
};

export default getLocationById;
