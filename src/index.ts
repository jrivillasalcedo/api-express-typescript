import express from "express";
import http from "http";
import bodyPaser from "body-parser";
import cookieParse from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParse());
app.use(bodyPaser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});
