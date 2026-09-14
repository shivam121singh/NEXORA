let IS_PROD = true;
const server = IS_PROD
? "https://nexora2-qrm8.onrender.com"
  : "http://localhost:8000";

export default server;