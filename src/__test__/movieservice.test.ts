/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";

// jest.mock("./../ts/services/movieservice.ts")
let mockData: IMovie[] = [
  {
    Title: "Die hard",
    imdbID: "tt0095016",
    Type: "Movie",
    Poster: "url",
    Year: "1988",
  },

  {
    Title: "Home alone",
    imdbID: "tt0099785",
    Type: "Movie",
    Poster: "url",
    Year: "1990",
  },

  {
    Title: "Elf",
    imdbID: "tt0319343",
    Type: "Movie",
    Poster: "url",
    Year: "2003",
  },
];

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData }});
    });
  }
}));

test("should get mock data", async () => {
//   //Arrange
  expect.assertions(2);
  let text: string = "Film";

//   //Act
  let myMovie = await getData(text);

//   //Assert
  expect(myMovie[2].Title).toBe("Elf");
  expect(myMovie[2].Year).toBe("2003");
});
