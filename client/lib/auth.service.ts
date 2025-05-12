interface UserSignupData {
  email: string;
  password: string;
  name: string;
}

interface ArtistSignupData extends UserSignupData {
  bio?: string;
  profilePic?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface UserResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    isArtist: false;
  };
}

interface ArtistLoginResponse {
  token: string;
  artist: {
    id: string;
    email: string;
    name: string;
    bio?: string;
    profilePic?: string;
    isArtist: true;
  };
}

interface ArtistSignupResponse {
  artist: {
    id: string;
    email: string;
    name: string;
    bio?: string;
    profilePic?: string;
    isArtist: true;
  };
  message: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const authService = {
  async userSignup(data: UserSignupData): Promise<UserResponse> {
    const response = await fetch(`${API_URL}/auth/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to sign up");
    }

    const result = await response.json();
    if (result.user) {
      result.user.isArtist = false;
    }
    return result;
  },

  async userLogin(data: LoginData): Promise<UserResponse> {
    const response = await fetch(`${API_URL}/auth/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    const result = await response.json();
    if (result.user) {
      result.user.isArtist = false;
    }
    return result;
  },

  async artistSignup(data: ArtistSignupData): Promise<ArtistSignupResponse> {
    const response = await fetch(`${API_URL}/auth/artist/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to sign up");
    }

    const result = await response.json();
    if (result.artist) {
      result.artist.isArtist = true;
    }
    return {
      artist: result.artist,
      message: "Artist signup successful. Please login with your credentials.",
    };
  },

  async artistLogin(data: LoginData): Promise<ArtistLoginResponse> {
    const response = await fetch(`${API_URL}/auth/artist/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    const result = await response.json();
    if (result.artist) {
      result.artist.isArtist = true;
    }
    return result;
  },
};
