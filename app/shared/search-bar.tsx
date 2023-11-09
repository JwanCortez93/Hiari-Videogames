import Link from "next/link";

export default function SearchBar () {
    return (
        <div>
            <input></input>
            <button>Search</button>
            <Link href="/advancedsearch">Advanced Search</Link>
        </div>
    )
}