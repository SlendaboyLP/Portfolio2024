"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.status === 200) {
      // Store user data in localStorage or context
      localStorage.setItem("user", JSON.stringify(username));
      window.location.href = "/dashboard";
    } else {
      setError(data.error);
    }
  };

  return (
    <main className="flex justify-center items-center h-[40vw]">
      <div className="bg-white rounded-md h-3/4 w-1/3 space-y-6 p-6">
        <h1 className="text-4xl font-black text-center mt-4">Login</h1>
        <form className="w-full space-y-4" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="mb-2">Username:</label>
            <input
              type="text"
              name="username"
              className="border rounded p-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Password:</label>
            <input
              type="password"
              name="password"
              className="border rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
