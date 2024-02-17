import getData from "./fetchData.js";
import { favoriteList } from "./index.js";

const favClass = "ri-heart-fill fav-item";
const unfavClass = "ri-heart-line unfav-item";

/* --------------------------------------------- */
//creates a card for a movie and return that card
//take an object movieData containing all the info related
//to movie
/* --------------------------------------------- */
export function createCard(movieData) {
	const div = document.createElement("div");
	div.classList.add("movie-card");

	//to check if the movie already marked as favorite or not
	const favUnfavClass = favoriteList.find((ele) => ele.title === movieData.title) ? favClass : unfavClass;

	div.innerHTML = `
        <img
					src="${movieData.posterSrc}"
					alt="" />

				<div class="card-main-part">
					<div>
						<div class="title">Title:${movieData.title} </div>
						<div class="rating">Rating:${movieData.rating} </div>
						<div class="releaseDate">Release: ${movieData.release}</div>
						<div class="genre">Genre:${movieData.genre}</div>
					</div>
					<div class="fav-icon">
						<i class="${favUnfavClass} fav-icon-heart"data-title="${movieData.title}" data-rating="${movieData.rating}" data-release="${movieData.release}" data-genre="${movieData.genre}"  data-postersrc="${movieData.posterSrc}"></i>
					
                                                <!-- 	<i class="ri-heart-fill"></i> -->
					</div>
				</div>
        `;

	return div;
}

/* --------------------------------------------- */
//will take the movie title fetch the data from the api and
//render that item in the form of card

//based upon the value of "apPrClr" the fun will append, prepend or clear the content of the container
//apPrClr take there values : append , prepend or clear
//clear first delete all the inner HTML of the container and then add item
/* --------------------------------------------- */
export function renderingFetchData(movieTitle, container, apPrClr = "append") {
	if (movieTitle) {
		getData(movieTitle).then((data) => {
			if (data.Response === "False") {
				alert("Movie Not Found");
			} else {
				const rating = data.Ratings.length === 0 ? "Nil" : data.Ratings[0].Value;

				const movieData = { title: data.Title, release: data.Released, posterSrc: data.Poster, genre: data.Genre, rating: rating };

				switch (apPrClr) {
					case "append":
						container.appendChild(createCard(movieData));
						break;
					case "prepend":
						container.prepend(createCard(movieData));
						break;
					case "clear":
						container.innerHTML = "";
						container.appendChild(createCard(movieData));
						break;
					default:
						console.log("Parameter value for apPrCl is worng");
						break;
				}
			}
		});
	} else {
		console.log("Invalid input");
	}
}
