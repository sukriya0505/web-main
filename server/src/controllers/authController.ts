import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface UserRequest {
  email: string;
  password: string;
  name: string;
}

interface ArtistRequest extends UserRequest {
  bio?: string;
  profilePic?: string;
}

const prisma = new PrismaClient();

export const userSignup = async (
  req: Request<{}, {}, UserRequest>,
  res: Response,
) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const token = jwt.sign(
      { userId: user.id, type: "user" },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" },
    );

    res
      .status(201)
      .json({
        user: { id: user.id, email: user.email, name: user.name },
        token,
      });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const userLogin = async (
  req: Request<{}, {}, Pick<UserRequest, "email" | "password">>,
  res: Response,
) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user.id, type: "user" },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" },
    );

    res.json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

export const artistSignup = async (
  req: Request<{}, {}, ArtistRequest>,
  res: Response,
) => {
  try {
    const { email, password, name, bio, profilePic } = req.body;

    const existingArtist = await prisma.artist.findUnique({
      where: { email },
    });

    if (existingArtist) {
      return res.status(400).json({ message: "Artist already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const artist = await prisma.artist.create({
      data: {
        email,
        password: hashedPassword,
        name,
        bio,
        profilePic,
      },
    });

    const token = jwt.sign(
      { artistId: artist.id, type: "artist" },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" },
    );

    res.status(201).json({
      artist: {
        id: artist.id,
        email: artist.email,
        name: artist.name,
        bio: artist.bio,
        profilePic: artist.profilePic,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating artist", error });
  }
};

export const artistLogin = async (
  req: Request<{}, {}, Pick<UserRequest, "email" | "password">>,
  res: Response,
) => {
  try {
    const { email, password } = req.body;

    const artist = await prisma.artist.findUnique({
      where: { email },
    });

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    const isValidPassword = await bcrypt.compare(password, artist.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { artistId: artist.id, type: "artist" },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" },
    );

    res.json({
      artist: {
        id: artist.id,
        email: artist.email,
        name: artist.name,
        bio: artist.bio,
        profilePic: artist.profilePic,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
