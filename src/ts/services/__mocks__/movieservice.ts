import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";

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

export const getData = async() :Promise<IMovie[]> => {
    return new Promise((resolve) => {
        resolve(mockData)
    })
}