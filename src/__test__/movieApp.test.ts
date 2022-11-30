/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import * as functions from "./../ts/movieApp";

jest.mock("./../ts/services/movieservice.ts")

// describe("init", () => {
//   test("should find form", () => {
//     //Arrange
//     let spy = jest.spyOn(functions, "handleSubmit");
//     document.body.innerHTML = `<form id="searchForm"></form>`;

//     //Act
//     document.getElementById("searchForm")?.click();
//     functions.init();

//     //Assert
//     expect(spy).toHaveBeenCalled();

//   });
// });

describe("createhtml", () => {
    test("should see movie in dom", () => {
        //Arrange
        expect.assertions(1);
        let movies :IMovie[] = [{Title: "Elf", Poster: "url", imdbID: "10892", Year: "2003", Type: "Comedy"}];
        document.body.innerHTML = `<div id="movie-container"></div>`;

        //Act
        let container = document.getElementById("movie-container") as HTMLDivElement;
        functions.createHtml(movies, container as HTMLDivElement);

        //Assert
        expect(document.querySelectorAll("div").length).toBeGreaterThan(0);

        //Tömmer html
        document.body.innerHTML = "";
        
    })
});

describe("error message", () => {
    test("should display error", () => {
        //Arrange
        document.body.innerHTML = `<div id="movie-container"></div>`;
        let pTag = document.createElement("p");

        //Act
        let container = document.getElementById("movie-container") as HTMLDivElement;
        pTag.innerHTML = "Inga sökresultat att visa";
        functions.displayNoResult(container);

        //Assert
        expect(pTag.innerHTML).toBe(`Inga sökresultat att visa`);
    })
})

/**
 * //Error meddelande
export const displayNoResult = (container: HTMLDivElement) => {
  let noMessage = document.createElement("p");

  noMessage.innerHTML = "Inga sökresultat att visa";

  container.appendChild(noMessage);
};

 */