import Link from "next/link";

export default function NavLinks () {
    return (
        <div>
            <Link href="/about">About</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/create">Create</Link>
            <Link href="/settings">Settings</Link>
        </div>
    )
}