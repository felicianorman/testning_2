/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice"

jest.mock("./../ts/services/movieservice.ts")

test("should get mock data", async () => {
    //Arrange
    expect.assertions(2);
    let text :string = "Film";


    //Act
    let myMovie :IMovie[] = await getData(text);

    //Assert
    expect(myMovie.length).toBe(3);
    expect(myMovie[0].Title).toBe("Ett");

})