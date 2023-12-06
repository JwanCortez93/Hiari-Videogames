import fetch from "node-fetch";
import { Videogame } from "@/app/types/videogames-types";
import Keyv from "keyv";
import data from "@/app/data/mock.json";

const keyv = new Keyv();
const apiTokenSlug = `?key=${process.env.API_RAWG}`;
const mock = data;

export async function getVideogames(): Promise<Videogame[]> {
  const cachedVideogames = await keyv.get("videogames");

  if (cachedVideogames) return cachedVideogames;

  const arrayAPI = [];
  for (let i = 1; i < 4; i++) {
    const response = await fetch(
      `https://api.rawg.io/api/games${apiTokenSlug}&page_size=35&page=${i}`
    );
    if (response.status === 200) {
      const data = (await response.json()) as { results: Videogame[] };
      arrayAPI.push(...data.results);
    }
  }

  if (arrayAPI.length === 0) {
    return mock as any;
  }
  return arrayAPI;
}

export async function getVideogameById(id: string): Promise<Videogame> {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}${apiTokenSlug}`
  );
  if (response.status === 200) {
    const data = (await response.json()) as Videogame;
    return data;
  }
  const videogame = mock.find((videogame) => {
    return videogame.id === +id;
  });
  return videogame as any;
}
export async function getVideogameScreenshots(
  id: string
): Promise<{ id: number; image: string }[]> {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}/screenshots${apiTokenSlug}`
  );
  const data = (await response.json()) as {
    results: { id: number; image: string }[];
  };
  await keyv.set("videogames", data.results, 18000000);
  return data.results;
}

export async function getVideogamesByName(name: string) {}
export async function createVideogame(videogame: Videogame) {}
export async function modifyVideogame(id: string, videogame: Videogame) {}
export async function deleteVideogame(id: string) {}
