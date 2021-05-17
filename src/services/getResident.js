const getResident = (url) => {
	const promise = fetch(url);
	return promise.then((res) => res.json());
};

export default getResident;
