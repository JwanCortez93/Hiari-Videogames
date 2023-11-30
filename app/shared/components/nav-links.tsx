import Link from "next/link";
import style from "../modules/nav-links.module.css"

export default function NavLinks () {
    
const {container, divLink} = style

    return (
        <div id={container}>
            <Link className={divLink} href="/about">About</Link>
            <Link className={divLink} href="/collection">Collection</Link>
            <Link className={divLink} href="/create">Create</Link>
        </div>
    )
}