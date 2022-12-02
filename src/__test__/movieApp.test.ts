/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import * as functions from "./../ts/movieApp";

// jest.mock("./../ts/services/movieservice.ts");

describe("init", () => {
  test("should find form", () => {
    //Arrange
    document.body.innerHTML = `  <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>`;

    let spy = jest.spyOn(functions, "handleSubmit").mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve();
        })
    );

    //Act
    functions.init();
    (document.getElementById("searchForm") as HTMLFormElement).submit();

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

describe("createhtml", () => {
  test("should see movie in dom", async () => {
    //Arrange
    expect.assertions(3);

    let movies: IMovie[] = [
      {
        Title: "Elf",
        Poster: "url",
        imdbID: "10892",
        Year: "2003",
        Type: "Comedy",
      },
    ];
    document.body.innerHTML = `<div id="movie-container"></div>`;

    //Act
    let container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    functions.createHtml(movies, container as HTMLDivElement);

    //Assert
    expect(document.querySelectorAll("div.movie").length).toBe(1);
    expect(document.querySelectorAll("h3").length).toBe(1);
    expect(document.querySelectorAll("img").length).toBe(1);

    //Tömmer html
    document.body.innerHTML = "";
  });
});

describe("error message", () => {
  test("should display error", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let pTag = document.createElement("p");

    //Act
    let container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    pTag.innerHTML = "Inga sökresultat att visa";
    functions.displayNoResult(container);

    //Assert
    expect(pTag.innerHTML).toBe(`Inga sökresultat att visa`);
    document.body.innerHTML = " ";
  });
});

test("handleSubmit", async () => {
  //Arrange
  document.body.innerHTML = `<form id="searchForm">
 <input type="text" id="searchText" placeholder="Skriv titel här" />
 <button type="submit" id="search">Sök</button>
</form>
<div id="movie-container"></div>`;

await functions.handleSubmit();

expect(document.querySelectorAll("div").length).toBe(1);
});
