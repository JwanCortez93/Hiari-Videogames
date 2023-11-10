import fetch from "node-fetch";
import Videogame from "../types/videogames-types";

const apiTokenSlug = `?key=${process.env.API_RAWG}`;

export async function getVideogames(): Promise<Videogame[]> {
  const response = await fetch(`https://api.rawg.io/api/games${apiTokenSlug}`);
  const data = await response.json() as {results:Videogame[]};
  return data.results;
}

export async function getVideogameById (id:string) {}
export async function getVideogamesByName (name:string) {}
export async function createVideogame (videogame:Videogame) {}
export async function modifyVideogame (id:string, videogame:Videogame) {}
export async function deleteVideogame (id:string) {}
