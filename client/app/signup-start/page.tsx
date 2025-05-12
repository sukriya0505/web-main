"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon, Palette } from "lucide-react";

export default function SignupStartPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Choose Account Type</CardTitle>
          <CardDescription>
            Select how you want to use the platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/user-signup" className="block">
            <Button
              variant="outline"
              className="w-full h-20 flex flex-col items-center justify-center space-y-2"
            >
              <UserIcon className="h-6 w-6" />
              <span>Sign up as User</span>
            </Button>
          </Link>

          <Link href="/artist-signup" className="block">
            <Button
              variant="outline"
              className="w-full h-20 flex flex-col items-center justify-center space-y-2"
            >
              <Palette className="h-6 w-6" />
              <span>Sign up as Artist</span>
            </Button>
          </Link>

          <div className="text-center text-sm">
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
