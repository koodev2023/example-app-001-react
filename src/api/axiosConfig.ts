import axios from "axios";

export default axios.create({
  baseURL: "https://useless-abra-koo-org-ef04fa68.koyeb.app/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
