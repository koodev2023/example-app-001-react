import axios from "axios";

export default axios.create({
  baseURL: "https://example-app-001-springboot.onrender.com",
  headers: { "ngrok-skip-browser-warning": "true" },
});
