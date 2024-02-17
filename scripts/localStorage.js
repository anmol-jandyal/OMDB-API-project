export function updateLocalStorage(data, key) {
	//it takes two parameter one : data (may be list or anything)
	//second : key : name of the property under which we store our data
	localStorage.setItem(key, JSON.stringify(data));
}

export function fetchListLocalStorage(key) {
	const data = localStorage.getItem(key);

	if (data) {
		return JSON.parse(data);
	}

	localStorage.setItem(key, JSON.stringify([]));
	return [];
}
