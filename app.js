// ================= API =====================
import { API_KEY, BASE_URL, API_URL, IMG_URL, language } from "./api.js";

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      showMovies(data);
    });
}

function showMovies(data) {
  const movie = data.results[Math.floor(Math.random() * data.results.length)];
  const { poster_path, title, overview } = movie;

  const movieContainer = document.querySelector(".movie-container");
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");
  movieContainer.appendChild(movieElement);
  movieElement.innerHTML = `
    <img class="poster" src="${IMG_URL + poster_path}" alt="${title}">
    <div class="title-and-description">
      <h2 class="title">${title}</h2>
      <p class="description">${overview}</p>
    </div>
  `;
}

// =========== Click ==============

function sortMovies() {
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const movie = document.querySelectorAll(".movie");

    if (movie.length == 0) {
      getMovies(API_URL);
    } 
    
    else {
      console.log("existe");
      movie.item(0).remove();
      getMovies(API_URL);
    }
  });
}

sortMovies();
