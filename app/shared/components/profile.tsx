import Link from "next/link";
import style from "../modules/profile.module.css";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = await getServerSession(options);

  const { container, divLink } = style;

  return (
    <div id={container}>
      <Link className={divLink} href="/profile">
        Profile
      </Link>
      <Link className={divLink} href="/settings">
        Settings
      </Link>
    </div>
  );
}
