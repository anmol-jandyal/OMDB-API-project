import { addingSearchEvents } from "./search.js";
import { fetchListLocalStorage } from "./localStorage.js";
import { renderFavoriteList } from "./UI.js";

export const favoriteList = fetchListLocalStorage();

addingSearchEvents();

renderFavoriteList();
