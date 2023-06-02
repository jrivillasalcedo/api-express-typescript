import express from "express";
import http from "http";
import bodyPaser from "body-parser";
import cookieParse from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

// needed dependency for read .env file
import dotenv from "dotenv";
dotenv.config();

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

let password = process.env.DATABASE_PASSWORD;
const MONGO_URL = `mongodb+srv://jrivillarepository:${password}@cluster0.3o0fslw.mongodb.net/?retryWrites=true&w=majority`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
