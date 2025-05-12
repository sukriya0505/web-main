import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const userPaths = ["/user-dashboard", "/profile"];
const artistPaths = ["/artist-dashboard"];
const authPaths = [
  "/login-fill-email",
  "/signup-start",
  "/user-signup",
  "/artist-signup",
  "/artist-login",
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const currentPath = request.nextUrl.pathname;
  const storedUser = request.cookies.get("user")?.value;

  let userRole = "none";
  if (storedUser) {
    try {
      const userData = JSON.parse(storedUser);
      userRole = userData.isArtist ? "artist" : "user";
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  if (
    [...userPaths, ...artistPaths].some((path) =>
      currentPath.startsWith(path),
    ) &&
    !token
  ) {
    const loginPath = currentPath.startsWith("/artist-dashboard")
      ? "/artist-login"
      : "/login-fill-email";
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  if (
    userRole === "user" &&
    artistPaths.some((path) => currentPath.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/user-dashboard", request.url));
  }

  if (
    userRole === "artist" &&
    userPaths.some((path) => currentPath.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/artist-dashboard", request.url));
  }

  if (authPaths.includes(currentPath) && token) {
    const redirectPath =
      userRole === "artist" ? "/artist-dashboard" : "/user-dashboard";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...userPaths, ...artistPaths, ...authPaths],
};
