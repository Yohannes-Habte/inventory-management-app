import express from "express";
import {
  createUser,
  deleteUserAccount,
  googleRegisterLogin,
  loginUser,
  updateUser,
  userLogout,
} from "../controllers/authsController.js";

// Auth Router
const authRouter = express.Router();

// Auth Routes
authRouter.post("/register", createUser);
authRouter.post("/google", googleRegisterLogin);
authRouter.post("/login", loginUser);
authRouter.put("/:id/update", updateUser);
authRouter.get("/logout", userLogout);
authRouter.delete("/delete/:id", deleteUserAccount);

// Export Auth Router
export default authRouter;
