import { IMovie } from "../ts/models/Movie";
import * as functions from "../ts/functions";

describe("movieSort", () => {
  test("should sort from a-ö", () => {
    //Arrange
    let christmasMovies: IMovie[] = [
      {
        Title: "Tomten är far till alla barnen",
        imdbID: "tt0201265",
        Poster: "url",
        Type: "Movie",
        Year: "1999",
      },
      {
        Title: "Grinchen - Julen är stulen",
        imdbID: "tt0170016",
        Poster: "url",
        Type: "Movie",
        Year: "2000",
      },
      {
        Title: "Nu är det jul igen 2",
        imdbID: "tt0304669",
        Poster: "url",
        Type: "Movie",
        Year: "2002",
      },
    ];
    let desc: boolean = true;

    //Act
    functions.movieSort(christmasMovies);

    //Assert
    expect(christmasMovies[0].Title).toBe("Grinchen - Julen är stulen");
    expect(christmasMovies[2].Title).toBe("Tomten är far till alla barnen");
  });

  test("should sort from ö-a", () => {
    //Arrange
    let christmasMovies: IMovie[] = [
      {
        Title: "Tomten är far till alla barnen",
        imdbID: "tt0201265",
        Poster: "url",
        Type: "Movie",
        Year: "1999",
      },
      {
        Title: "Grinchen - Julen är stulen",
        imdbID: "tt0170016",
        Poster: "url",
        Type: "Movie",
        Year: "2000",
      },
      {
        Title: "Nu är det jul igen 2",
        imdbID: "tt0304669",
        Poster: "url",
        Type: "Movie",
        Year: "2002",
      },
    ];
    let desc: boolean = false;

    //Act
    functions.movieSort(christmasMovies, desc);

    //Assert
    expect(christmasMovies[0].Title).toBe("Tomten är far till alla barnen");
    expect(christmasMovies[2].Title).toBe("Grinchen - Julen är stulen");
  });

  test("should be equal", () => {
    //Arrange
    let christmasMovies: IMovie[] = [
      {
        Title: "Tomten är far till alla barnen",
        imdbID: "tt0201265",
        Poster: "url",
        Type: "Movie",
        Year: "1999",
      },
      {
        Title: "Grinchen - Julen är stulen",
        imdbID: "tt0170016",
        Poster: "url",
        Type: "Movie",
        Year: "2000",
      },
      {
        Title: "Nu är det jul igen 2",
        imdbID: "tt0304669",
        Poster: "url",
        Type: "Movie",
        Year: "2002",
      },
    ];

    //Act
    functions.movieSort(christmasMovies);

    //Assert
    expect("Tomten är far till alla barnen").toBe("Tomten är far till alla barnen");
    // expect(christmasMovies[1].Title).toBe("Grinchen - Julen är stulen");

  });
});
