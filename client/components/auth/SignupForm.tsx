"use client";
import { useState } from "react";
import { useAuth } from "@/lib/auth.context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SignupFormProps {
  type: "user" | "artist";
  onSuccess?: () => void;
}

export function SignupForm({ type, onSuccess }: SignupFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    bio: "",
    profilePic: "",
  });

  const { userSignup, artistSignup, isLoading, error } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (type === "user") {
        await userSignup(formData.email, formData.password, formData.name);
      } else {
        await artistSignup(
          formData.email,
          formData.password,
          formData.name,
          formData.bio,
          formData.profilePic,
        );
      }
      onSuccess?.();
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </div>
      {type === "artist" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profilePic">Profile Picture URL</Label>
            <Input
              id="profilePic"
              name="profilePic"
              type="url"
              value={formData.profilePic}
              onChange={handleChange}
              placeholder="Enter profile picture URL"
            />
          </div>
        </>
      )}
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading
          ? "Loading..."
          : `Sign up as ${type === "user" ? "User" : "Artist"}`}
      </Button>
    </form>
  );
}
