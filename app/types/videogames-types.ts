export type Videogame = {
  id: number;
  name: string;
  slug:string;
  description: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatforms[];
  released: string;
  tba: boolean;
  background_image: string;
  background_image_additional: string;
  short_screenshots: {id:number,image:string}[];
  rating: number;
  playtime: number;
  dominant_color: string;
  platforms: {
    requirements: { minimum: string; recommended: string };
    released_at:string;
    platform: Platform;
  }[];
  stores: { store: Store }[];
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
  esrb_rating: { id: number; name: string; slug: string };
};

export type MetacriticPlatforms = {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
  year_start: number;
  games_count: number;
};

export type Store = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export type Developer = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export type Tag = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export type Publisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};


