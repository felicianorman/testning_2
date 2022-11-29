import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";

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
  }
];

export const getData = async() :Promise<IMovie[]> => {
    return new Promise((resolve) => {
        resolve(mockData)
    })
}