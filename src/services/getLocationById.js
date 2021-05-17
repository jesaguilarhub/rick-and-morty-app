const getLocationById = (locationId) => {
	const promise = fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
	return promise.then((res) => res.json());
};

export default getLocationById;
