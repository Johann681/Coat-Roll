// utils/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  console.warn("⚠️ NEXT_PUBLIC_API_URL is not defined!");
}

export default API_URL;
