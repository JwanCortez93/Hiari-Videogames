"use client";

import Link from "next/link";
import style from "./page.module.css";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";


export default function page() {
  const {
    body,
    container,
    title,
    form,
    input,
    button,
    error_message,
    footer,
    register,
  } = style;

  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const [error, setError]: any = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) setError("Fields are incomplete");
    else if (
      !(await fetch("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
      }))
    )
      setError("The email doesn't exist");
    else {
      setError("");
      await signIn("Email", {
        Email: email,
        Password: password,
      });
    }
  }

  return (
    <body id={body}>
      <div id={container}>
        <h1 id={title}>Log In</h1>
        <form onSubmit={handleSubmit} id={form}>
          <input
            ref={emailRef}
            className={input}
            type="email"
            placeholder="Email"
          ></input>
          <input
            ref={passwordRef}
            className={input}
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit" className={button}>
            Login
          </button>
          {error && <h5 className={error_message}>{error}</h5>}
          <h3 className={footer}>
            Don't have an account?{" "}
            <Link id={register} href={"/signup"}>
              Register
            </Link>
          </h3>
        </form>
      </div>
    </body>
  );
}
