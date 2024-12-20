"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="w-full bg-gray-800">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className=" text-3xl p-5 text-center text-white"> Signup Page</h1>
        <hr />

        <label htmlFor="username" className="text-white">
          {" "}
          UserName
        </label>
        <input
          className="p-2 border-red-500 rounded-lg mb-4  focus:border-red-600"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="UserName"
        />

        <label htmlFor="email" className="text-white">
          {" "}
          email
        </label>
        <input
          className="p-2 border-red-500 rounded-lg mb-4  focus:border-red-600"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />

        <label htmlFor="password" className="text-white">
          {" "}
          password
        </label>
        <input
          className="p-2 border-red-500 rounded-lg mb-4  focus:border-red-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />

        <button
          onClick={onSignup}
          className=" p-2 border border-gray-300 text-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
        >
          Signup Here
        </button>
        <Link href="/login">
          <button className="text-white">Visit Login Page</button>{" "}
        </Link>
      </div>
    </div>
  );
}
