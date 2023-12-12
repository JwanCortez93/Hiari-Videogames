"use client";

import Link from "next/link";
import style from "../modules/profile.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Profile({ session }: any) {
  const { container, divLink, profile_icon } = style;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    const clickedId = target.id;
    const popupWidth = 500;
    const popupHeight = 600;
    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;
    const popupOptions = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    window.open(`/${clickedId}`, "SignUpWindow", popupOptions);
  }

  if (!session)
    return (
      <div id={container}>
        <div id="login" className={divLink} onClick={handleClick}>
          Log in
        </div>
        <div id="signup" className={divLink} onClick={handleClick}>
          Sign up
        </div>
      </div>
    );

  return (
    <div id={container}>
      <Link href="/profile" className={divLink} id={profile_icon}>
        {session.user?.image ? (
          <img
            style={{ width: "1.5em" }}
            src={session.user.image}
            alt="Profile image"
          />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
      </Link>
      <Link className={divLink} href="/settings">
        {session.user?.name}
      </Link>
    </div>
  );
}
