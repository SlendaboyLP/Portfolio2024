"use client";
import { useEffect, useState } from "react";
import Login from "./Login";

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
      {!user ? (
        <Login />
      ) : (
        <div>
          <h1>Dashboard</h1>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
