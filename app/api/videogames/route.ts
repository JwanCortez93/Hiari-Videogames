import { Videogame } from "@/app/types/videogames-types";
import { NextResponse } from "next/server";
import fetch from "node-fetch";

const API_KEY = process.env.API_RAWG;
const API_URL = `https://api.rawg.io/api/games`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const response = await fetch(`${API_URL}?key=${API_KEY}&search=${name}`);
  const videogames: { results: Videogame[] } = (await response.json()) as {
    results: Videogame[];
  };

  return NextResponse.json(videogames.results);
}
