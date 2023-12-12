"use client";

import Link from "next/link";
import style from "./page.module.css";
import { useRef, useState } from "react";
import { validatePasswordSignup } from "../api/utils/validations";

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

  const usernameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const passwordCheckRef: any = useRef();
  const [error, setError]: any = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordCheck = passwordCheckRef.current.value;
    const emailExists = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    console.log(emailExists.json);

    if (!username || !email || !password || !passwordCheck)
      setError("Fields are incomplete");
    else if (!password === passwordCheck) {
      setError("Passwords don't match");
    } else if (validatePasswordSignup(password))
      setError(validatePasswordSignup(password));
    else if (!emailExists) setError("The email already exists");
    else {
      setError("");
      await fetch("api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
    }
  }

  return (
    <body id={body}>
      <div id={container}>
        <h1 id={title}>Register</h1>
        <form onSubmit={handleSubmit} id={form}>
          <input
            ref={usernameRef}
            className={input}
            type="text"
            placeholder="Username"
          ></input>
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
          <input
            ref={passwordCheckRef}
            className={input}
            type="password"
            placeholder="Repeat Password"
          ></input>
          <button type="submit" className={button}>
            Sign Up
          </button>
          {error && <h5 className={error_message}>{error}</h5>}
          <h3 className={footer}>
            Already have an account?{" "}
            <Link id={register} href={"/login"}>
              Log in
            </Link>
          </h3>
        </form>
      </div>
    </body>
  );
}
