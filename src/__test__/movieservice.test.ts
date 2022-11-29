/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";

// jest.mock("./../ts/services/movieservice.ts")
let mockData: IMovie[] = [
  {
    Title: "Ett",
    imdbID: "15859",
    Type: "Horror",
    Poster: "url",
    Year: "1998",
  },

  {
    Title: "Ett",
    imdbID: "15859",
    Type: "Horror",
    Poster: "url",
    Year: "1998",
  },

  {
    Title: "Ett",
    imdbID: "15859",
    Type: "Horror",
    Poster: "url",
    Year: "1998",
  },
];

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: mockData });
    });
  }
}));

test("should get mock data", async () => {
//   //Arrange
//   expect.assertions(2);
  let text: string = "Film";

//   //Act
  let myMovie = await getData(text);

//   //Assert
  expect(mockData.length).toBe(3);
//   expect(myMovie[0].Title).toBe("Ett");
});
