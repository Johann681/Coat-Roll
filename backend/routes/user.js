import express from "express";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Fetch logged in user profile
router.get("/me", protect, async (req, res) => {
  res.json(req.user); // { _id, name, email, ... }
});

export default router;
