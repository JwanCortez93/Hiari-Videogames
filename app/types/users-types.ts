import {
  Developer,
  Genre,
  Platform,
  Publisher,
  Store,
  Tag,
  Videogame,
} from "./videogames-types";

export type User = {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isAdmin:boolean;
  createdVideogames?: Videogame[];
  favouriteVideogames?: Videogame[];
  wishlistVideogames?: Videogame[];
  preferences?: Preferences;
  options?: Options;
};

export type Preferences = {
  genres?: Genre[];
  platforms?: Platform[];
  developers?: Developer[];
  publishers?: Publisher[];
  tags?: Tag[];
  stores?: Store[];
};

export type Options = {
  theme: string;
  language: string;
  notifications: string;
};
