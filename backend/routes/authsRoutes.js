import express from "express";
import { createUser, loginUser } from "../controllers/authsController.js";

// Auths Router
const authRouter = express.Router();

// Auths Routes
authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);
authRouter.put("/update");

// Export Auths Router
export default authRouter;
