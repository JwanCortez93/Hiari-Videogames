import style from "../modules/nav-bar.module.css";
import Link from "next/link";
import Logo from "./logo";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";

export default function NavBar() {
  return (
    <div id={style.container}>
      <div id={style.nav_links}>
        <Link href="/home">
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <SearchBar />
    </div>
  );
}
