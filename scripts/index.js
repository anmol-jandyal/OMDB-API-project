import { addingSearchEvents } from "./search.js";
import { fetchListLocalStorage } from "./localStorage.js";
import { renderList } from "./favoriteListFN.js";
import { addEventForFavUnfav } from "./favoriteListFN.js";

//this will fetch the list from the localStorage if present else return an empty array[]
export const favoriteList = fetchListLocalStorage("favList");

//apply event listener on the container containing cards for
//functionality related to favorite or unfavorite
addEventForFavUnfav();

//will apply event listener to search related item
addingSearchEvents();

//we need to render the favourite list every time when ever we reload the page
renderList(favoriteList, document.querySelector(".favorite-card-container"));
