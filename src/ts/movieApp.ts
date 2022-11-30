import { IMovie } from "./models/Movie";
import { getData } from "./services/movieservice";

let movies: IMovie[] = [];

export const init = () => {
  //Hittar form elementet
  let form = document.getElementById("searchForm") as HTMLFormElement;
  //Lägger till eventlistener submit 
  form.addEventListener("submit", (e: SubmitEvent) => {
    //prevent att submit återställer sidan
    e.preventDefault();
    //anropar handleSubmit
    exports.handleSubmit();
  });
};

export async function handleSubmit() {
  //Hämtar input value för att söka
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

    //Hämtar div och tömmer innan
  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  //??
  try {
    movies = await getData(searchText);

    if (movies.length > 0) {
      exports.createHtml(movies, container);
    } else {
      exports.displayNoResult(container);
    }
  } catch {
    exports.displayNoResult(container);
  }
}

//Skapar html
export const createHtml = (movies: IMovie[], container: HTMLDivElement) => {
  for (let i = 0; i < movies.length; i++) {
    //Skapar div, h3 och img
    let movie = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    //Hittar vår title, poster och alt
    movie.classList.add("movie");
    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    //Publicerar i DOM
    movie.appendChild(title);
    movie.appendChild(img);

    container.appendChild(movie);
  }
};

//Error meddelande
export const displayNoResult = (container: HTMLDivElement) => {
  let noMessage = document.createElement("p");

  noMessage.innerHTML = "Inga sökresultat att visa";

  container.appendChild(noMessage);
};
