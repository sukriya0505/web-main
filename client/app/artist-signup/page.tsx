"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SignupForm } from "@/components/auth/SignupForm";

export default function ArtistSignupPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create Artist Account</CardTitle>
          <CardDescription>
            Enter your details to create an artist account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm type="artist" />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login-fill-email"
              className="text-purple-500 hover:underline"
            >
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
