import express from "express";
import {
  userSignup,
  userLogin,
  artistSignup,
  artistLogin,
} from "../controllers/authController";

const router = express.Router();

// User routes
router.post("/user/signup", userSignup);
router.post("/user/login", userLogin);

// Artist routes
router.post("/artist/signup", artistSignup);
router.post("/artist/login", artistLogin);

export default router;
