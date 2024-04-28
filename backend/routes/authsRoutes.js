import express from "express";
import { createUser } from "../controllers/authsController.js";

// Auths Router
const authRouter = express.Router();

// Auths Routes
authRouter.post("/register", createUser);
authRouter.post("/login");
authRouter.put("/update");

// Export Auths Router
export default authRouter;
