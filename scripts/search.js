import { renderingFetchData } from "./UI.js";

//selecting seaarch related elements
const navSearchBtn = document.querySelector(".nav-search-btn");
const searchBar = document.querySelector("#search-input-bar");
const searchELeBtn = document.querySelector(".search-input-btn");
const searchOverLay = document.querySelector("#search-overlay");
const searchCloseBtn = document.querySelector("#search-overlay .search-close-btn");

export function addingSearchEvents() {
	navSearchBtn.addEventListener("click", () => {
		// searchOverLay.style.display = "block";
		searchOverLay.style.transform = "translateY(0)";
	});

	searchCloseBtn.addEventListener("click", () => {
		searchOverLay.style.transform = "translateY(-100%)";
	});

	searchELeBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const movieTitle = searchBar.value.trim();

		renderingFetchData(movieTitle, document.querySelector(`.search-card-container`), "prepend");
	});
}
