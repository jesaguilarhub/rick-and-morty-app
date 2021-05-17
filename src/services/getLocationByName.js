async function getLocationByName(name, url = 'https://rickandmortyapi.com/api/location') {
	try {
		const data = await fetch(url).then((res) => res.json());
		const found = data.results.find((location) => location.name === name);
		if (found) return found;
		return getLocationByName(name, data.info.next);
	} catch (err) {
		return err;
	}
}

export default getLocationByName;
