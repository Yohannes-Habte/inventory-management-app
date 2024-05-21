import express from "express";
import { getUser } from "../controllers/userController.js";

// User Router
const userRouter = express.Router();

// User Routes
userRouter.get("/user", getUser);
userRouter.delete("/");
userRouter.get("/");

// Export User Router
export default userRouter;
