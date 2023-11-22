import fetch from "node-fetch";
import Videogame from "../types/videogames-types";

const apiTokenSlug = `?key=${process.env.API_RAWG}`;

export async function getVideogames(): Promise<Videogame[]> {
  const arrayAPI = [];
for (let i = 1; i < 4; i++) {
  const response = await fetch(`https://api.rawg.io/api/games${apiTokenSlug}&page_size=35&page=${i}`);
  const data = await response.json() as {results:Videogame[]};
  arrayAPI.push(...data.results);
}
return arrayAPI
}

export async function getVideogameById (id:string): Promise<Videogame> {
  const response = await fetch(`https://api.rawg.io/api/games/${id}${apiTokenSlug}`);
  const data = await response.json() as Videogame;
  return data
} 
export async function getVideogameScreenshots (id:string): Promise<{id:number,image:string}[]> {
  const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots${apiTokenSlug}`);
  const data = await response.json() as {results:{id:number,image:string}[]};
  return data.results
}

export async function getVideogamesByName (name:string) {}
export async function createVideogame (videogame:Videogame) {}
export async function modifyVideogame (id:string, videogame:Videogame) {}
export async function deleteVideogame (id:string) {}
