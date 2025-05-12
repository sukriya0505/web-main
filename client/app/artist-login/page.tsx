"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export default function ArtistLoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Artist Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your artist dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm type="artist" />
          <div className="mt-4 text-center text-sm">
            Want to become an artist?{" "}
            <Link
              href="/artist-signup"
              className="text-purple-500 hover:underline"
            >
              Sign up as artist
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
