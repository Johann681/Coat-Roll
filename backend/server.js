import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import estimateRoutes from "./routes/estimateRoutes.js";

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
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

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
  console.log(`📩 Email user: ${process.env.EMAIL_USER ? "Loaded ✅" : "Missing ❌"}`);
  console.log(`🌍 Mongo URL: ${process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌"}`);
});
