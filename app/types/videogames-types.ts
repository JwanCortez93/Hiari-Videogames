type Videogame = {
  id: number;
  name: string;
  description: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatforms[];
  released: string;
  tba: boolean;
  background_image: string;
  background_image_additional: string;
  rating: number;
  playtime: number;
  dominant_color: string;
  platforms: {
    requirements: { minimum: string; recommended: string };
    platform: Platform[];
  };
  stores: { store: Store }[];
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
  esrb_rating: { id: number; name: string; slug: string };
};

type MetacriticPlatforms = {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
};

type Platform = {
  id: number;
  name: string;
  slug: string;
  year_start: number;
  games_count: number;
};

type Store = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type Developer = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type Publisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export default Videogame;
