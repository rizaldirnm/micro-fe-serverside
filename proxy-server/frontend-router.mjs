export default {
  "/": {
    desc: "marketing app or we can call it on-boarding",
    server: "http://localhost:3001",
  },
  "/_next": { // handling onboarding app that not having basePath
    desc: "marketing app or we can call it on-boarding",
    server: "http://localhost:3001",
  },
  "/product": {
    desc: "product app",
    server: "http://localhost:3002",
  },
};
