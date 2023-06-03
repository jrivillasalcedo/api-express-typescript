import { login, register } from "../controllers/authentication";
import express from "express";

export default (router: express.Router) => {
  router.post("/api/auth/register", register);
  router.post("/api/auth/login", login);
};
