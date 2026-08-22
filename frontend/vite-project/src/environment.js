let IS_PROD = true;
const server = IS_PROD
  ? "https://nexora-r0zb.onrender.com"
  : "http://localhost:8000";

export default server;