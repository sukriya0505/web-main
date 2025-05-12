"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth.context";
import { useState, useEffect } from "react";

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>
        My name is{" "}
        <span className="text-sm text-red-500">{currentUser?.name}</span>
      </h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
