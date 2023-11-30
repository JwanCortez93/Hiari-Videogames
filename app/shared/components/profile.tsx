import Link from "next/link";
import style from "../modules/profile.module.css"

export default function Profile() {

  const {container, divLink} = style

  return (
    <div id={container}>
      <Link className={divLink} href="/profile">Profile</Link>
      <Link className={divLink} href="/settings">Settings</Link>
    </div>
  );
}
