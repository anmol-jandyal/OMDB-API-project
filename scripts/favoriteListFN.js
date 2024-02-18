import { createCard } from "./UI.js";
import { updateLocalStorage } from "./localStorage.js";
import { favoriteList } from "./index.js";

export function addEventForFavUnfav() {
	document.querySelector(".search-card-container").addEventListener("click", favUnfav);
	document.querySelector(".favorite-card-container").addEventListener("click", favUnfav);
}
//will take the input form the
export function renderList(list, container) {
	container.innerHTML = "";

	for (let movie of list) {
		container.appendChild(createCard(movie));
	}
}

function movieDataFromDom(ele) {
	return {
		title: ele.dataset["title"],
		release: ele.dataset["release"],
		posterSrc: ele.dataset["postersrc"],
		genre: ele.dataset["genre"],
		rating: ele.dataset["rating"],
	};
}

export function favUnfav(e) {
	if (e.target.classList.contains("fav-icon-heart")) {
		const movieData = movieDataFromDom(e.target);
		if (e.target.classList.contains("unfav-item")) {
			e.target.classList.remove("ri-heart-line");
			e.target.classList.add("ri-heart-fill");

			e.target.classList.remove("unfav-item");
			e.target.classList.add("fav-item");

			//adding the movie to the favorite list

			favoriteList.push(movieData);

			document.querySelector(".favorite-card-container").appendChild(createCard(movieData));
		} else if (e.target.classList.contains("fav-item")) {
			e.target.classList.add("ri-heart-line");
			e.target.classList.remove("ri-heart-fill");

			e.target.classList.remove("fav-item");
			e.target.classList.add("unfav-item");

			//removing the element from favorite list
			favoriteList.splice(
				favoriteList.findIndex((ele) => ele.title === movieData.title),
				1
			);

			//re Render the whole favorite section
			renderList(favoriteList, document.querySelector(".favorite-card-container"), "append");
		}

		updateLocalStorage(favoriteList, "favList");
	}
}
