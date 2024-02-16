import { renderSearchUI } from "./UI.js";

const navSearchBtn = document.querySelector(".nav-search-btn");
const searchELe = document.querySelector("#search-input-bar");
const searchELeBtn = document.querySelector(".search-input-btn");
const searchOverLay = document.querySelector("#search-overlay");
const searchCloseBtn = document.querySelector("#search-overlay .search-close-btn");

export function addingSearchEvents() {
	navSearchBtn.addEventListener("click", (e) => {
		searchOverLay.style.display = "block";
	});
	searchCloseBtn.addEventListener("click", (e) => {
		searchOverLay.style.display = "none";
	});

	searchELeBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const movieTitle = searchELe.value.trim();

		renderSearchUI(movieTitle);
	});
}
