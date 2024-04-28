import express from "express"

// Auths Router
const authRouter = express.Router()

// Auths Routes
authRouter.post("/register")
authRouter.post("/login")
authRouter.put("/update")

// Export Auths Router
export default authRouter;