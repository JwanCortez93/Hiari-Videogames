import Link from "next/link";
import Logo from "./logo";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";

export default function NavBar () {
    return (
        <div>
            <Link href="/home">
            <Logo/>
            </Link>
            <NavLinks/>
            <SearchBar/>
        </div>
    )
}