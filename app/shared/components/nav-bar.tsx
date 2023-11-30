import style from "../modules/nav-bar.module.css";
import Link from "next/link";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";
import Profile from "./profile";

export default function NavBar() {
  const { container, nav_links, logo, searchbar, profile } = style;

  return (
    <div id={container}>
      <div id={nav_links}>
        <Link href="/home">
          <img id={logo} src="/Logo without name.png" alt="Hiari Logo" />
        </Link>
        <NavLinks />
      </div>
      <div id={searchbar}>
        <SearchBar />
      </div>
      <div id={profile}>
        <Profile />
      </div>
    </div>
  );
}
