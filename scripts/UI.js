import getData from "./fetchData.js";
import { updateLocalStorage } from "./localStorage.js";
import { favoriteList } from "./index.js";

const favClass = "ri-heart-fill fav-item";
const unfavClass = "ri-heart-line unfav-item";

function favUnfav(e) {
	if (e.target.classList.contains("unfav-item")) {
		e.target.classList.remove("ri-heart-line");
		e.target.classList.add("ri-heart-fill");

		e.target.classList.add("fav-item");
		e.target.classList.remove("unfav-item");

		//adding the movie to the favorite list
		favoriteList.push(e.target.dataset["title"]);
	} else if (e.target.classList.contains("fav-item")) {
		e.target.classList.add("ri-heart-line");
		e.target.classList.remove("ri-heart-fill");

		e.target.classList.remove("fav-item");
		e.target.classList.add("unfav-item");

		//removing the element from favorite list
		favoriteList.splice(favoriteList.indexOf(e.target.dataset["title"]), 1);
	}

	updateLocalStorage(favoriteList);
	renderFavoriteList();
}

export function renderCard(title, release, posterSrc, genre, rating, container) {
	const div = document.createElement("div");
	div.classList.add("movie-card");

	//to check if the movie already marked as favorite or not
	const favUnfavClass = favoriteList.includes(title) ? favClass : unfavClass;

	div.innerHTML = `
        <img
					src="${posterSrc}"
					alt="" />

				<div class="flex-container">
					<div>
						<div class="title">Title:${title} </div>
						<div class="rating">Rating:${rating} </div>
						<div class="releaseDate">Release: ${release}</div>
						<div class="genre">Genre:${genre}</div>
					</div>
					<div class="fav-icon">
						<i class="${favUnfavClass}"data-title="${title}"></i>
					
                                                <!-- 	<i class="ri-heart-fill"></i> -->
					</div>
				</div>
        `;

	container.appendChild(div);
}

function renderingUi(movieTitle, container) {
	container.addEventListener("click", favUnfav);

	if (movieTitle) {
		getData(movieTitle).then((data) => {
			if (data.Response === "False") {
				alert("Movie Not Found");
			} else {
				const rate = data.Ratings.length === 0 ? "Nil" : data.Ratings[0].Value;

				renderCard(data.Title, data.Released, data.Poster, data.Genre, rate, container);
			}
		});
	} else {
		console.log("Invalid input");
	}
}

export function renderSearchUI(movieTitle) {
	const container = document.querySelector(`.search-card-container`);
	container.innerHTML = "";

	renderingUi(movieTitle, container);
}

export function renderFavoriteList() {
	const favoriteContainer = document.querySelector(".favorite-card-container");

	favoriteContainer.innerHTML = "";

	for (let movieTitle of favoriteList) {
		renderingUi(movieTitle, favoriteContainer);
	}
}
