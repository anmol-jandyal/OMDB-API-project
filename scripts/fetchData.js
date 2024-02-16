const apiURL = "https://www.omdbapi.com/?apikey=815fa8e4&t=";

export default async function fetchData(movieTitle) {
	try {
		const resp = await fetch(apiURL + movieTitle);

		const data = await resp.json();

		return data;
	} catch (error) {
		console.log("error triggered: " + error);
	}
}
