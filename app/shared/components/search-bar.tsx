"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import style from "../modules/search-bar.module.css";
import { signal } from "@preact/signals-react";
import { Videogame } from "@/app/types/videogames-types";
import { useEffect } from "react";

export default function SearchBar() {
  const {
    container,
    searchbar,
    input,
    buttons_container,
    button,
    search_icon,
    predictions_box,
  } = style;

  const searchInput = signal("");
  const gamePredictions = signal([] as Videogame[]);

  async function handleChange(e: any) {
    if (e.target.value.length >= 3) {
      const prompt = e.target.value;
      const response = await fetch(`/api/videogames?name=${prompt}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const videogames = await response.json();
      gamePredictions.value = videogames;
    } else gamePredictions.value = [];
  }
  

  return (
    <div id={container}>
      <div id={searchbar}>
        <input
          onChange={handleChange}
          className={input}
          placeholder="Search..."
        ></input>
        {gamePredictions.value.length > 0 ? (
          <div>
            <ul>
              {gamePredictions.value.map((videogame: Videogame) => {
                return (
                  <Link href={`/detail/${videogame.id}`}>
                    <li>Hello</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        ) : null}
        <div id={buttons_container}>
          <button className={button}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={search_icon} />
          </button>
          <Link href="/advancedsearch">
            <button className={button}>Advanced Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
