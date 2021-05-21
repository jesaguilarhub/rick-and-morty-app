const baseURL = 'https://rickandmortyapi.com/api/location/?name=';
function getLocationByName(name) {
	return fetch(baseURL + name).then((res) => res.json());
}

export default getLocationByName;
