import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import style from "../modules/search-bar.module.css";

export default function SearchBar() {
  const { container, searchbar, input, buttons_container, button, search_icon } = style;

  return (
    <div id={container}>
      <div id={searchbar}>
        <input className={input} placeholder="Search..."></input>
        <div id={buttons_container}>
          <button className={button}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={search_icon}
            />
          </button>
          <Link href="/advancedsearch">
            <button className={button}>Advanced Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
