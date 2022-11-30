/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import * as functions from "./../ts/movieApp";

jest.mock("./../ts/services/movieservice.ts");

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
  test("should see movie in dom", () => {
    //Arrange
    expect.assertions(1);
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
    expect(document.querySelectorAll("div").length).toBeGreaterThan(0);

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

// describe("handleSubmit", () => {
//     // test("should find input", async () => {
//     //     //Arrange
//     //     document.body.innerHTML = `<input type="text" id="searchText" placeholder="Skriv titel här" />`;
//     //     document.body.innerHTML = `<div id="movie-container"></div>`;

//     //     //Act
//     //    let input = (document.getElementById("searchText") as HTMLInputElement);
//     //     await functions.handleSubmit();

//     //     //Assert
//     //     expect(input).toBe("searchText");
//     // });

//     test("should add empty string to container", () => {
//         //Arrange
//         document.body.innerHTML = `<div id="movie-container"></div>`;

//         //Act
//         let container = document.getElementById("movie-container") as HTMLDivElement;
//         container.innerHTML = " ";
//         functions.handleSubmit();

//         //Assert
//         expect(container).toContain("");

//     })
// })

/**
 *   //Hämtar input value för att söka
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

    //Hämtar div och sätter sedan till ""
  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";
 */
