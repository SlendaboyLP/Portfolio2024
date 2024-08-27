"use client";
import { useEffect, useState } from "react";
import Login from "./Login";

import Dashboard from "./Dashboard";

export default function DashboardPage() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      {!user ? <Login /> : <Dashboard></Dashboard>}

      <button
        onClick={() => {
          localStorage.removeItem("user");
          setUser(null);
        }}
        className="absolute top-0 right-0 m-4 z-[1000] bg-purple-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
