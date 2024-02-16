export function updateLocalStorage(list) {
	localStorage.setItem("favList", JSON.stringify(list));
}

export function fetchListLocalStorage() {
	if (localStorage.getItem("favList")) return JSON.parse(localStorage.getItem("favList"));

	localStorage.setItem("favList", JSON.stringify([]));
	return [];
}
