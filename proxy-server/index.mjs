import express from "express";
import cors from "cors";
import handler from "./handler.mjs";

const PORT = 3000;

// Express APP
const app = express();

// cors middleware
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use((req, res) => handler(req, res));

app.listen(PORT, (err) => {
  err
    ? console.log(`Failed to listen on PORT ${PORT}`)
    : console.log(`Load Balancer Server " + "listening on PORT ${PORT}`);
});
