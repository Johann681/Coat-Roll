// src/app/utils/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || (
  process.env.NODE_ENV === "production"
    ? "https://coat-roll-backend.onrender.com/api" 
    : "http://localhost:5000/api"
);

export default API_URL;
