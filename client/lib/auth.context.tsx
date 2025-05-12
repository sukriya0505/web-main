"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authService } from "./auth.service";
import Cookies from "js-cookie";

interface User {
  id: string;
  email: string;
  name: string;
}

interface Artist extends User {
  bio?: string;
  profilePic?: string;
}

interface AuthContextType {
  user: User | Artist | null;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  userLogin: (email: string, password: string) => Promise<void>;
  artistLogin: (email: string, password: string) => Promise<void>;
  userSignup: (email: string, password: string, name: string) => Promise<void>;
  artistSignup: (
    email: string,
    password: string,
    name: string,
    bio?: string,
    profilePic?: string,
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | Artist | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = Cookies.get("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleAuthResponse = async (response: any) => {
    const { token, user, artist } = response;
    const authUser = user || artist;

    return new Promise<void>((resolve) => {
      if (artist && !token) {
        router.replace("/artist-login");
        resolve();
        return;
      }

      if (typeof window !== "undefined") {
        Cookies.set("token", token, { expires: 7 });
        Cookies.set("user", JSON.stringify(authUser), { expires: 7 });
        localStorage.setItem("user", JSON.stringify(authUser));
      }

      setToken(token);
      setUser(authUser);

      setTimeout(() => {
        if (user) {
          router.replace("/user-dashboard");
        } else if (artist && token) {
          router.replace("/artist-dashboard");
        }
        resolve();
      }, 100);
    });
  };

  const userLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.userLogin({ email, password });
      await handleAuthResponse(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const artistLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.artistLogin({ email, password });
      await handleAuthResponse(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const userSignup = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.userSignup({ email, password, name });
      await handleAuthResponse(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const artistSignup = async (
    email: string,
    password: string,
    name: string,
    bio?: string,
    profilePic?: string,
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authService.artistSignup({
        email,
        password,
        name,
        bio,
        profilePic,
      });
      await handleAuthResponse(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    if (typeof window !== "undefined") {
      Cookies.remove("token");
      Cookies.remove("user");
      localStorage.removeItem("user");
      router.push("/login-fill-email");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        token,
        userLogin,
        artistLogin,
        userSignup,
        artistSignup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
