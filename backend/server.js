import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import estimateRoutes from "./routes/estimateRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://coat-roll.onrender.com"], // TODO: Confirm Render frontend URL
    credentials: true,
  })
);
app.use(helmet());

// DB connection
connectDB();

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/estimate", estimateRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Server listen (Render requires 0.0.0.0 + dynamic PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🔥 Server running on port ${PORT}`);
  console.log(`📩 Email user: ${process.env.EMAIL_USER ? "Loaded ✅" : "Missing ❌"}`);
  console.log(`🌍 Mongo URL: ${process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌"}`);
});
